<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { EntityVariant } from "../../../../Phaser/Game/MapEditor/Entities/EntityVariant";
    import EntityImage from "./EntityImage.svelte";

    export let entityVariant: EntityVariant;
    export let isActive: boolean;

    const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    data-testid="entity-item"
    class={`tw-flex tw-cursor-pointer tw-border-solid tw-border-transparent tw-h-full tw-w-full tw-bg-white/10 tw-rounded-2xl hover:tw-bg-white/20 hover:tw-border-white hover:tw-animate-pulse ${
        isActive ? "tw-border-solid tw-border-yellow-400 tw-rounded-2xl" : ""
    }`}
    on:click={() => dispatch("selectEntity", entityVariant)}
>
    <EntityImage
        classNames="tw-cursor-pointer tw-w-14 tw-h-14 tw-object-contain tw-m-auto"
        imageSource={entityVariant.defaultPrefab.imagePath}
        imageAlt={entityVariant.defaultPrefab.name}
    />
</div>
