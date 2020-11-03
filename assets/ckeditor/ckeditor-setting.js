/**
 * Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
        if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
    CKEDITOR.tools.enableHtml5Elements(document);

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
//            CKEDITOR.replace('ckeditor');
        } else {
            editorElement.setAttribute('contenteditable', 'true');
            CKEDITOR.inline('ckeditor');

            // TODO we can consider displaying some info box that
            // without wysiwygarea the classic editor may not work.
        }
        
        CKEDITOR.replace( 'ckeditor', {
//            filebrowserBrowseUrl: '/browser/browse.php',
            filebrowserUploadUrl: BASEURL + 'ckeditorform/upload'
        });
        
//        CKEDITOR.replace('ckeditor', {
//            extraPlugins: 'uploadimage',
//            height: 300,
//            // Upload images to a CKFinder connector (note that the response type is set to JSON).
//            uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
//            // Configure your file manager integration. This example uses CKFinder 3 for PHP.
//            filebrowserBrowseUrl: '/ckfinder/ckfinder.html',
//            filebrowserImageBrowseUrl: '/ckfinder/ckfinder.html?type=Images',
//            filebrowserUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
//            filebrowserImageUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
//            // The following options are not necessary and are used here for presentation purposes only.
//            // They configure the Styles drop-down list and widgets to use classes.
//
//            stylesSet: [
//                {name: 'Narrow image', type: 'widget', widget: 'image', attributes: {'class': 'image-narrow'}},
//                {name: 'Wide image', type: 'widget', widget: 'image', attributes: {'class': 'image-wide'}}
//            ],
//            // Load the default contents.css file plus customizations for this sample.
//            contentsCss: [CKEDITOR.basePath + 'contents.css', 'http://sdk.ckeditor.com/samples/assets/css/widgetstyles.css'],
//            // Configure the Enhanced Image plugin to use classes instead of styles and to disable the
//            // resizer (because image size is controlled by widget styles or the image takes maximum
//            // 100% of the editor width).
//            image2_alignClasses: ['image-align-left', 'image-align-center', 'image-align-right'],
//            image2_disableResizer: true
//        });
        
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

