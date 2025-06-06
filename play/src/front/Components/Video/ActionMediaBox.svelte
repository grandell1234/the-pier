<script lang="ts">
    import { writable } from "svelte/store";
    import { EmbedScreen, highlightedEmbedScreen } from "../../Stores/HighlightedEmbedScreenStore";
    import MoreActionSvg from "../images/ellipsis.svg";
    import MicrophoneCloseSvg from "../images/microphone-close.svg";
    import banUserSvg from "../images/ban-user.svg";
    import NoVideoSvg from "../images/no-video.svg";
    import PinSvg from "../images/pin.svg";
    //import BubbleTalkPng from "../images/bubble-talk.png";
    import { TrackStreamWrapperInterface } from "../../Streaming/Contract/TrackStreamWrapperInterface";
    import Tooltip from "../Util/Tooltip.svelte";
    import { LL } from "../../../i18n/i18n-svelte";
    import { VideoPeer } from "../../WebRtc/VideoPeer";
    import { userIsAdminStore } from "../../Stores/GameStore";
    import { analyticsClient } from "../../Administration/AnalyticsClient";
    import { embedScreenLayoutStore } from "../../Stores/EmbedScreensStore";
    import { LayoutMode } from "../../WebRtc/LayoutManager";
    import { SpaceUserExtended } from "../../Space/SpaceFilter/SpaceFilter";
    import { peerStore } from "../../Stores/PeerStore";
    import reportImg from "./images/report.svg";

    export let embedScreen: EmbedScreen;
    export let trackStreamWrapper: TrackStreamWrapperInterface;
    export let videoEnabled: boolean;

    let moreActionOpened = writable<boolean>(false);

    function muteAudio(spaceUser: SpaceUserExtended) {
        spaceUser.emitPrivateEvent({
            $case: "muteAudio",
            muteAudio: {
                force: false, // This is going to be overwritten by the processor of muteAudio in the back
            },
        });
    }

    function muteAudioEveryBody(spaceUser: SpaceUserExtended) {
        spaceUser.space.emitPublicMessage({
            $case: "muteAudioForEverybody",
            muteAudioForEverybody: {},
        });
    }

    function muteVideo(spaceUser: SpaceUserExtended) {
        spaceUser.emitPrivateEvent({
            $case: "muteVideo",
            muteVideo: {
                force: false, // This is going to be overwritten by the processor of muteVideo in the back
            },
        });
    }

    function muteVideoEveryBody(spaceUser: SpaceUserExtended) {
        spaceUser.space.emitPublicMessage({
            $case: "muteVideoForEverybody",
            muteVideoForEverybody: {},
        });
    }

    /**
     * TODO: implement ban user
     */
    /*function ban() {
        trackStreamWrapper.ban();
    }*/

    function kickoff(spaceUser: SpaceUserExtended) {
        spaceUser.emitPrivateEvent({
            $case: "kickOffUser",
            kickOffUser: {},
        });

        // extract the user id from the space user id (spaceUserId = roomId + "_" + userId)
        const spaceUserId = spaceUser.spaceUserId;
        const userId = Number(spaceUserId.split("_").pop());

        peerStore.removePeer(userId);
    }

    function pin() {
        if (!videoEnabled) return;
        highlightedEmbedScreen.toggleHighlight(embedScreen);
        embedScreenLayoutStore.set(LayoutMode.Presentation);
    }

    /*function sendPrivateMessage() {
        console.info("Not implemented yet");
    }*/

    function toggleActionMenu(value: boolean) {
        moreActionOpened.set(value);
    }

    function openBlockOrReportPopup() {
        trackStreamWrapper.blockOrReportUser();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="tw-absolute tw-top-0 tw-left-0 tw-flex tw-flex-col tw-flex-wrap tw-justify-between tw-items-center tw-p-1 tw-bg-black tw-bg-opacity-10 tw-rounded-lg tw-max-h-full tw-z-50 hover:tw-bg-opacity-90 tw-cursor-pointer"
    class:tw-mt-[0.2rem]={!videoEnabled}
    on:click={() => analyticsClient.moreActionMetting()}
    on:click|preventDefault|stopPropagation={() => toggleActionMenu(!$moreActionOpened)}
    on:mouseleave={() => toggleActionMenu(false)}
>
    {#if !$moreActionOpened}
        <!-- More action -->
        <button
            id="more-action"
            class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
        >
            <img src={MoreActionSvg} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />
        </button>
    {:else}
        <!-- Less action -->
        <button
            id="less-action"
            class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
        >
            <img src={MoreActionSvg} class="tw-w-4 tw-h-4 tw-rotate-90" alt="Ellipsis icon" />
            <Tooltip text={$LL.camera.menu.closeMenu()} rightPosition="true" />
        </button>

        {#await trackStreamWrapper.getExtendedSpaceUser()}
            <div />
        {:then spaceUser}
            <!-- Pin -->
            {#if videoEnabled}
                <button
                    id="pin"
                    class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
                    on:click={() => analyticsClient.pinMeetingAction()}
                    on:click|preventDefault|stopPropagation={() => pin()}
                >
                    <img src={PinSvg} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />
                    <Tooltip text={$LL.camera.menu.pin()} rightPosition="true" />
                </button>
            {/if}

            <!-- Mute audio user -->
            <button
                id="mute-audio-user"
                class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
                on:click={() => analyticsClient.muteMicrophoneMeetingAction()}
                on:click|preventDefault|stopPropagation={() => muteAudio(spaceUser)}
            >
                <img src={MicrophoneCloseSvg} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />
                <Tooltip text={$LL.camera.menu.muteAudioUser()} rightPosition="true" />
            </button>

            <!-- Mute audio every body -->
            {#if $userIsAdminStore}
                <button
                    id="mute-audio-everybody"
                    class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
                    on:click={() => analyticsClient.muteMicrophoneEverybodyMeetingAction()}
                    on:click|preventDefault|stopPropagation={() => muteAudioEveryBody(spaceUser)}
                >
                    <img src={MicrophoneCloseSvg} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />
                    <Tooltip text={$LL.camera.menu.muteAudioEveryBody()} rightPosition="true" />
                </button>
            {/if}

            <!-- Mute video -->
            <button
                id="mute-video-user"
                class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
                on:click={() => analyticsClient.muteVideoMeetingAction()}
                on:click|preventDefault|stopPropagation={() => muteVideo(spaceUser)}
            >
                <img src={NoVideoSvg} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />
                <Tooltip text={$LL.camera.menu.muteVideoUser()} rightPosition="true" />
            </button>

            <!-- Mute video every body -->
            {#if $userIsAdminStore}
                <button
                    id="mute-video-everybody"
                    class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
                    on:click={() => analyticsClient.muteVideoEverybodyMeetingAction()}
                    on:click|preventDefault|stopPropagation={() => muteVideoEveryBody(spaceUser)}
                >
                    <img src={NoVideoSvg} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />
                    <Tooltip text={$LL.camera.menu.muteVideoEveryBody()} rightPosition="true" />
                </button>
            {/if}

            <!-- Kickoff user -->
            {#if $userIsAdminStore}
                <button
                    id="kickoff-user"
                    class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
                    on:click={() => analyticsClient.kickoffMeetingAction()}
                    on:click|preventDefault|stopPropagation={() => kickoff(spaceUser)}
                >
                    <img src={banUserSvg} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />
                    <Tooltip text={$LL.camera.menu.kickoffUser()} rightPosition="true" />
                </button>
            {/if}

            <!-- Send private message -->
            <!--            <button-->
            <!--                    id="send-private-message"-->
            <!--                    class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"-->
            <!--                    on:click={() => analyticsClient.sendPrivateMessageMeetingAction()}-->
            <!--                    on:click|preventDefault|stopPropagation={() => sendPrivateMessage(spaceUser)}-->
            <!--            >-->
            <!--                <img src={BubbleTalkPng} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />-->
            <!--                <Tooltip text={$LL.camera.menu.senPrivateMessage()} rightPosition="true" />-->
            <!--            </button>-->

            <!-- Block or report user -->
            {#if trackStreamWrapper instanceof VideoPeer}
                <button
                    id="block-or-report-user"
                    class="action-button tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-0 tw-mx-1 tw-cursor-pointer"
                    on:click={() => analyticsClient.reportMeetingAction()}
                    on:click|preventDefault|stopPropagation={() => openBlockOrReportPopup()}
                >
                    <img src={reportImg} class="tw-w-4 tw-h-4" alt="Ellipsis icon" />
                    <Tooltip text={$LL.camera.menu.blockOrReportUser()} rightPosition="true" />
                </button>
            {/if}
        {/await}
    {/if}
</div>

<style lang="scss">
    .action-button {
        transition: all 0.2s;
        &:hover {
            --tw-bg-opacity: 1;
            opacity: 1;
            transform: scale(1.2);
        }
    }
</style>
