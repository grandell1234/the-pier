import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const mapEditor: DeepPartial<Translation["mapEditor"]> = {
    sideBar: {
        areaEditor: "Areal wobźěłaś",
        entityEditor: "Entitu wobźěłaś",
        tileEditor: "Kachlu wobźěłaś",
        trashEditor: "Zbórk",
        closeMapEditor: "Mapu zacyniś",
        mapManagerActivated: "Mapowy manager je aktiwěrowany",
        exploreTheRoomActivated: "Wobłuk wužiwaś",
        areaEditorActivated: "Areal wobźěłaś",
        entityEditorActivated: "Entitu wobźěłaś",
        trashEditorActivated: "Zbórk wužiwaś",
        configureMyRoomActivated: "Mój rum wobźěłaś",
    },
    properties: {
        silentProperty: {
            label: "Śichy wobceŕk",
            description: "Rozgrona nutśi zakazaś.",
        },
        textProperties: {
            label: "Nadpismo",
            placeholder: "Napišćo how tekst, ako se pokažo, gaž z objektom interagěrujśo.",
        },
        focusableProperties: {
            label: "Dajo se fokusěrowaś",
            description: "Fokusěrujśo kameru na ten areal, gaž stupijośo nutś.",
            zoomMarginLabel: "Zoom-marža",
            defaultButtonLabel: "Fokusěrowaś na",
        },
        jitsiProperties: {
            label: "Jitsi-śpa",
            description: "Startujśo jitsi-konferencu, gaž stupijośo nutś.",
            jitsiUrl: "Jitsi-URL",
            jitsiUrlPlaceholder: "meet.jit.si",
            roomNameLabel: "Mě śpy",
            roomNamePlaceholder: "Mě śpy",
            defaultButtonLabel: "Jitsi-śpu wótcyniś",
            audioMutedLabel: "Standardowe nastajenje: zuk wuśišony",
            moreOptionsLabel: "Wěcej opcijow",
            trigger: "Interakcija",
            triggerMessage: "Toast-powěsć",
            triggerShowImmediately: "Ned pśi nutśstupjenju pokazaś",
            triggerOnClick: "Startowaś miniměrowane we dołojcnej bałce",
            triggerOnAction: "Akcijowy toast z powěsću pokazaś",
            closable: "Móžo se zacyniś",
            noPrefix: "Z drugimi śpami źěliś",
            jitsiRoomConfig: {
                addConfig: "Opciju pśidaś",
                startWithAudioMuted: "Startowaś z deaktiwěrowanym mikrofonom",
                startWithVideoMuted: "Startowaś z deaktiwěrowaneju kameru",
                cancel: "Pśetergnuś",
                validate: "Waliděrowaś",
            },
        },
        audioProperties: {
            label: "Zukowu dataju wótegraś",
            description: "Audio wótegraś z głosnosću, ak dajo se nastajiś.",
            audioLinkLabel: "Audiolink",
            audioLinkPlaceholder: "https://xxx.yyy/smthing.mp3",
            defaultButtonLabel: "Muziku wótegraś",
            volumeLabel: "Głosnosć",
        },
        linkProperties: {
            label: "Link wótcyniś",
            description: "Wótcyńśo link, gaž stupijośo nutś.",
            linkLabel: "Link-URL",
            newTabLabel: "We nowem woknje wótcyniś",
            trigger: "Interakcija",
            triggerMessage: "Toast-powěsć",
            triggerShowImmediately: "Ned pokazaś, gaž stupijośo nutś",
            triggerOnClick: "Startowaś miniměrowane we dołojcnej bałce",
            triggerOnAction: "Akcijowy toast z powěsću pokazaś",
            closable: "Móžo se zacyniś",
            allowAPI: "API dowóliś",
            linkPlaceholder: "https://example.com",
            defaultButtonLabel: "Link wótcyniś",
            width: "Šyrokosć",
            policy: "iFrame dowóliś",
            policyPlaceholder: "fullscreen",
            errorEmbeddableLink: "Link njedajo se zatwariś",
            messageNotEmbeddableLink: "Ten link njedajo se zatwariś.",
            warningEmbeddableLink: "Ten link njedajo se zatwariś.",
            errorInvalidUrl: 'Njepłaśeca URL. Wóna musy se zachopiś z "http://" oder "https://".',
            findOutMoreHere: "How zgónijośo wěcej",
            openPickerSelector: "Wuzwóleński wuběraŕ wótcyniś",
            forcedInNewTab: "W nowem woknje wótcyniś",
        },
        advancedOptions: "Rozšyrjone opcije",
        speakerMegaphoneProperties: {
            label: "Powědaŕska cona",
            description: "",
            nameLabel: "Mě powědaŕskeje cony",
            namePlaceholder: "Mója powědaŕska cona",
        },
        listenerMegaphoneProperties: {
            label: "Pśisłuchaŕska cona",
            description: "",
            nameLabel: "Mě pśisłuchaŕskeje cony",
            namePlaceholder: "Mója pśisłuchaŕska cona",
        },
        chatEnabled: "Chat jo aktiwěrowany",
        startProperties: {
            label: "Startowy wobceŕk",
            description: "Městnosć, źož luźe se na kórśe zjawiju.",
            nameLabel: "Mě",
            namePlaceholder: "Startowy wobceŕk",
        },
        exitProperties: {
            label: "Wuchod",
            description: "Městnosć, źož luźe kórtu spušćiju.",
            exitMap: "Kórtu spušćiś",
            exitMapStartAreaName: "Startowy wobceŕk",
        },
        youtubeProperties: {
            label: "YouTube-wideo wótcyniś",
            description: "YouTube-wideo wótcyniś, gaž stupijośo nutś.",
            error: "Prošu zapodaś płaćiwy YouTube-URL",
            disabled: "YouTube-wótcynjenje je deaktiwěrowane.",
        },
        googleDocsProperties: {
            label: "Google Docs wótcyniś",
            description: "Google Docs wótcyniś, gaž stupijośo nutś.",
            error: "Prošu zapodaś płaćiwy Google Docs-URL",
            disabled: "Google Docs-wótcynjenje je deaktiwěrowane.",
        },
        klaxoonProperties: {
            label: "Klaxoon wótcyniś",
            description: "Klaxoon wótcyniś, gaž stupijośo nutś.",
            error: "Prošu zapodaś płaćiwy Klaxoon-URL",
            disabled: "Klaxoon-wótcynjenje je deaktiwěrowane.",
        },
        googleSheetsProperties: {
            label: "Google Sheets wótcyniś",
            description: "Google Sheets wótcyniś, gaž stupijośo nutś.",
            error: "Prošu zapodaś płaćiwy Google Sheets-URL",
            disabled: "Google Sheets-wótcynjenje je deaktiwěrowane.",
        },
        googleSlidesProperties: {
            label: "Google Slides wótcyniś",
            description: "Google Slides wótcyniś, gaž stupijośo nutś.",
            error: "Prošu zapodaś płaćiwy Google Slides-URL",
            disabled: "Google Slides-wótcynjenje je deaktiwěrowane.",
        },
        eraserProperties: {
            label: "Eraser wótcyniś",
            description: "Eraser wótcyniś, gaž stupijośo nutś.",
            defaultButtonLabel: "Eraser",
            error: "Prošu zapodaś płaćiwy Google Eraser-URL",
            disabled: "Eraser-wótcynjenje je deaktiwěrowane.",
        },
        googleDriveProperties: {
            label: "Google Drive wótcyniś",
            description: "Google Drive wótcyniś, gaž stupijośo nutś.",
            error: "Prošu zapodaś płaćiwy Google Drive-URL",
            disabled: "Google Drive-wótcynjenje je deaktiwěrowane.",
        },
    },
    areaEditor: {
        editInstructions: "Klikniśo na wobceŕk, aby jogo kakosći pśeměnili.",
        nameLabel: "Mě",
        nameLabelPlaceholder: "Mě",
        areaDescription: "Pśedpokładny opis",
        areaDescriptionPlaceholder: "Pśedpokładny opis",
        addDescriptionField: "Opis pśidaś",
    },
    entityEditor: {
        itemPicker: {
            searchPlaceholder: "Slěźiś",
            backToSelectObject: "Slědk k wuzwólonemu objektoju",
        },
        trashTool: {
            delete: "Klikniśo na objekt, aby jen wulašowali!",
        },
        deleteButton: "Wulašowaś",
        testInteractionButton: "Interakciju testowaś",
        buttonLabel: "Wopismo bublina",
        editInstructions: "Klikniśo na objekt, aby jogo kakosći pśeměnili.",
        selectObject: "Klikniśo na objekt, aby jen wuzwólili",
        objectName: "Mě",
        objectNamePlaceholder: "Mě",
        objectDescription: "Pśedpokładny opis",
        objectDescriptionPlaceholder: "Pśedpokładny opis",
        addDescriptionField: "Opis pśidaś",
    },
    settings: {
        loading: "Lodujo se...",
        megaphone: {
            title: "Megafon",
            description: "Megafon jo rěd, z kótarymž móžośo swój głos wusćełaś pó cełem swěśe abo we jadnej śpě.",
            inputs: {
                spaceName: "Mě śpy",
                spaceNameHelper:
                    "Mě śpy, źož megafon móžo se wužywaś. Gaž wóstajijośo to pólo prozne, ga móžo se wón we cełem swěśe wužywaś.",
                scope: "Wobcerjenje wužyśa",
                world: "Swět",
                room: "Śpa",
                rights: "Pšawa",
                rightsHelper:
                    "Pšawa, ako wužywaŕ musy měś, aby megafon wužywał. Gaž wóstajijośo to pólo prozne, ga buźo kuždy móc megafon wužywaś.",
                error: {
                    title: "Zmólka",
                    save: {
                        success: "Nastajenja megafona su zachowane",
                        fail: "Zmólka pśi zapisanju nastajenjow megafona",
                    },
                },
            },
        },
    },
};

export default mapEditor;
