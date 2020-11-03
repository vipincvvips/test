/**
 * Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

        /* exported initSample */

        if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
    CKEDITOR.tools.enableHtml5Elements(document);

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';
CKEDITOR.config.removePlugins = 'checkbox, radio';

var initSample = (function () {
    var wysiwygareaAvailable = isWysiwygareaAvailable(),
            isBBCodeBuiltIn = !!CKEDITOR.plugins.get('bbcode');

    return function () {
        var editorElement = CKEDITOR.document.getById('ckeditor');

//		if ( isBBCodeBuiltIn ) {
//			editorElement.setHtml(
//				'Hello world!\n\n' +
//				'I\'m an instance of [url=http://ckeditor.com]CKEditor[/url].'
//			);
//		}

//                CKEDITOR.removeButtons = 'Underline,JustifyCenter';
        // Depending on the wysiwygare plugin availability initialize classic or inline editor.
        if (wysiwygareaAvailable) {
            CKEDITOR.replace('ckeditor');
        } else {
            editorElement.setAttribute('contenteditable', 'true');
            CKEDITOR.inline('ckeditor');

            // TODO we can consider displaying some info box that
            // without wysiwygarea the classic editor may not work.
        }
        CKEDITOR.config.toolbar = [
            {name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
            {name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Scayt']},
            {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
            {name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar']},
            {name: 'tools', items: ['Maximize']},
            {name: 'document', groups: ['mode', 'document', 'doctools'], items: ['Source']},
            {name: 'others', items: ['-']},
            '/',
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat']},
            {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']},
            {name: 'styles', items: ['Styles', 'Format']},
            {name: 'about', items: ['About']}
        ];

        CKEDITOR.config.toolbarGroups = [
            {name: 'clipboard', groups: ['clipboard', 'undo']},
            {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
            {name: 'links'},
            {name: 'insert'},
            {name: 'forms'},
            {name: 'tools'},
            {name: 'document', groups: ['mode', 'document', 'doctools']},
            {name: 'others'},
            '/',
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
            {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
            {name: 'styles'},
            {name: 'colors'},
            {name: 'about'}
        ];
    };

    function isWysiwygareaAvailable() {
        // If in development mode, then the wysiwygarea must be available.
        // Split REV into two strings so builder does not replace it :D.
        if (CKEDITOR.revision == ('%RE' + 'V%')) {
            return true;
        }

        return !!CKEDITOR.plugins.get('wysiwygarea');
    }
})();

