'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_OPACTITY = 1;
var DEFAULT_BACKGROUND_COLOR = '#ffffff';
var DEFAULT_RELATIVE_POSITION = 'beforeend';

var SvgButton = function () {
    function SvgButton() {
        _classCallCheck(this, SvgButton);
    }

    _createClass(SvgButton, null, [{
        key: 'standardMapImage',
        value: function standardMapImage(image_name) {
            var img_width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;

            var image_element = '<a href="images/' + image_name + '" target="_blank"><img  width="' + img_width + 'px" src="images/' + image_name + '"/></a>';
            return image_element;
        }
    }, {
        key: 'insertDefault',
        value: function insertDefault(clear_all_options) {
            var append_to_id = clear_all_options.append_to_id,
                marker_icon_title = clear_all_options.marker_icon_title,
                normal_opacity = clear_all_options.normal_opacity,
                hover_opacity = clear_all_options.hover_opacity,
                main_color = clear_all_options.main_color,
                minor_color = clear_all_options.minor_color,
                minor_hover = clear_all_options.minor_hover,
                background_color = clear_all_options.background_color,
                relative_position = clear_all_options.relative_position;

            if (marker_icon_title === undefined) {
                marker_icon_title = '';
            }
            if (normal_opacity === undefined) {
                normal_opacity = DEFAULT_OPACTITY;
            }
            if (hover_opacity === undefined) {
                hover_opacity = DEFAULT_OPACTITY;
            }
            if (minor_hover === undefined) {
                minor_hover = minor_color;
            }
            if (background_color === undefined) {
                background_color = DEFAULT_BACKGROUND_COLOR;
            }
            if (relative_position === undefined) {
                relative_position = DEFAULT_RELATIVE_POSITION;
            }
            var clear_all_defaults = {
                append_to_id: append_to_id,
                marker_icon_title: marker_icon_title,
                main_color: main_color,
                minor_color: minor_color,
                minor_hover: minor_hover,
                normal_opacity: normal_opacity,
                hover_opacity: hover_opacity,
                background_color: background_color,
                relative_position: relative_position
            };
            return clear_all_defaults;
        }
    }, {
        key: 'clear_all',
        value: function clear_all(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n         <svg width="32" height="32" viewBox=\'0 0 300 300\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n            <g display="inline" class="' + main_svg + '">\n                <title>' + marker_icon_title + '</title>\n                    <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                    <g class="' + minor_svg + '" transform="rotate(-45 244,245)" stroke="null">\n                        <path d="m245,163c-22,0 -41,18 -41,41c0,16 9,30 23,37l17,86l17,-86c14,-6 23,-20 23,-37c0,-22 -18,-41 -41,-41l0,0l2,0zm0,0" stroke="null"></path>\n                    </g>\n                    <g class="' + minor_svg + '" transform="rotate(33 27,273)"  stroke="null">\n                        <path d="m27,192c-22,0 -40,18 -40,40c0,16 9,30 23,37l17,85l17,-85c14,-6 23,-20 23,-37c0,-22 -18,-40 -40,-40l0,0zm0,0" stroke="null"></path>\n                    </g>\n                    <g stroke="null">\n                        <path fill="' + main_color + '" d="m290.96816,8.04289c-6.78995,-6.79189 -17.80179,-6.79189 -24.59563,0.00194l-94.6721,94.6721l-17.06223,-17.06223c-5.6845,-5.6845 -14.90276,-5.6845 -20.58823,0l-10.26257,10.26257c-24.84312,5.92034 -49.68526,11.84069 -74.52838,17.76394l-39.69735,9.46381c-3.32413,0.79197 -6.03001,3.19796 -7.20535,6.40659c-1.1763,3.20863 -0.6658,6.79287 1.35877,9.54534c43.93282,59.71491 96.48606,112.26814 156.19999,156.19902c1.7761,1.30636 3.89772,1.98186 6.04069,1.98186c1.18019,0 2.36717,-0.20479 3.50562,-0.62212c3.20863,-1.1763 5.61365,-3.88219 6.40659,-7.20632l11.8533,-49.72505c5.12546,-21.50055 10.24996,-43.00013 15.37251,-64.50068l10.26257,-10.26257c5.6845,-5.6845 5.6845,-14.90276 0,-20.58823l-17.06126,-17.06126l94.67307,-94.67307c6.79384,-6.79384 6.79189,-17.80567 0,-24.59563l-0.00001,-0.00001zm-131.31902,261.54618c-8.28557,-6.37553 -16.41003,-12.94032 -24.39375,-19.66136l13.42462,-37.83196l-26.5309,26.52896c-9.55213,-8.44668 -18.86551,-17.14861 -27.94499,-26.0893l13.33145,-21.06186l-21.12689,13.26545c-8.31177,-8.4428 -16.41391,-17.09232 -24.29864,-25.94469l26.63378,-26.63281l-38.06392,13.50615c-7.28493,-8.59226 -14.37576,-17.35922 -21.25985,-26.30476l90.74915,-21.63157l61.10958,61.10958l-21.62963,90.74818l-0.00001,-0.00001z" stroke="null"></path>\n                    </g>\n                </g>\n            </svg>\n      ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'initSvg',
        value: function initSvg(clear_all_options) {
            SvgButtons.unique_class_count++;
            var unique_class = SvgButtons.unique_class_count;
            var clear_all_defaults = SvgButtons.insertDefault(clear_all_options);
            var normal_opacity = clear_all_defaults.normal_opacity,
                hover_opacity = clear_all_defaults.hover_opacity,
                minor_color = clear_all_defaults.minor_color,
                minor_hover = clear_all_defaults.minor_hover;

            var main_svg = 'clear-main-' + unique_class;
            var minor_svg = 'clear-minor-' + unique_class;
            var svg_css = '\n        <style>\n            .' + main_svg + ' {\n                fill :' + minor_color + ';\n                fill-opacity:' + normal_opacity + ';\n                opacity:' + normal_opacity + ';\n            }\n            .' + main_svg + ':hover {\n                fill:' + minor_hover + ';\n                fill-opacity:' + hover_opacity + ';\n                opacity:' + hover_opacity + ';\n                cursor:pointer;\n            }\n            .' + minor_svg + '{\n                fill: inherit\n            }\n        </style> ';
            clear_all_defaults.svg_css = svg_css;
            clear_all_defaults.main_svg = main_svg;
            clear_all_defaults.minor_svg = minor_svg;
            return clear_all_defaults;
        }
    }, {
        key: 'upMarkerHover',
        value: function upMarkerHover(clear_all_options) {

            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n                    <svg width="32" height="32" style="margin-left:-12px" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                        <g display="inline" class="' + main_svg + '" style="float:right">\n                            <title>' + marker_icon_title + '</title>\n                           \n                            <g class="' + minor_svg + '"  transform="rotate(-90 436,112.58331298828121) ">\n                                <rect transform="rotate(45 496.4166870117188,136) " height="100.80909" width="36.95837" y="85.09545" x="477.93749" stroke-width="5" stroke="null" ></rect>\n                                <path d="m515.75596,114.31625l-6.74279,-22.15675l-172.20624,0.34951l-9.85121,39.49548l183.14319,0.47142l5.65705,-18.15966z" ></path>\n                                <rect transform="rotate(135 495.7499694824219,89.66665649414061) " height="100.80909" width="36.95837" y="39.26214" x="477.2708" stroke-width="5" stroke="null" ></rect>\n                            </g>\n                            <g display="inline" stroke="null" >\n                                <path fill="' + main_color + '" d="m244.5,1.99999c-69.87445,0 -126.5,56.64136 -126.5,126.5c0,50.89648 30.20484,94.44312 73.50342,114.51709l52.99658,264.98291l52.99658,-264.98291c43.29957,-20.07397 73.50342,-63.62061 73.50342,-114.51709c0,-69.85864 -56.64037,-126.5 -126.5,-126.5zm0,0" stroke="null"></path>\n                            </g>\n                        </g>\n                    </svg>\n        ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'resizeHover',
        value: function resizeHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n                    <svg width="32" height="32"\n                     viewBox=\'0 0 512 512\'\n                     xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                    <g display="inline" class="' + main_svg + '">\n                        <title>' + marker_icon_title + '</title>\n                        <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                        <g>\n                            <path fill="' + main_color + '" d="m397.555,0.001l-327.531,0c-6.903,0 -12.5,5.597 -12.5,12.5l0,238.977l-45.024,0c-6.903,0 -12.5,5.597 -12.5,12.5l0,133.576c0,6.902 5.597,12.5 12.5,12.5l133.576,0c6.903,0 12.5,-5.598 12.5,-12.5l0,-45.022l238.979,0c6.902,0 12.5,-5.599 12.5,-12.5l0,-327.531c0,-6.904 -5.598,-12.5 -12.5,-12.5zm-305.031,317.529l0,-31.054l31.053,0l0,31.054l-31.053,0l0,0zm-22.5,35l53.553,0l0,22.522l-88.577,0l0,-88.576l22.523,0l0,53.554c0.001,6.903 5.597,12.5 12.501,12.5zm76.052,-101.052l-53.553,0l0,-216.477l282.53,0l0,282.529l-216.477,0l0,-53.554c0,-6.903 -5.596,-12.498 -12.5,-12.498z" ></path>\n                        </g>\n                        <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                            <path stroke="null" d="m242.00147,46.5548c-34.64617,0 -62.99304,28.34687 -62.99304,62.99304c0,25.19722 14.17343,47.24478 36.221,58.26856l26.77204,133.8602l26.77204,-133.8602c22.04756,-9.44896 36.221,-31.49652 36.221,-58.26856c0,-34.64617 -28.34687,-62.99304 -62.99304,-62.99304l0,0zm0,0"></path>\n                        </g>\n                    </g>\n                </svg>\n \n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'resizeHideInfo',
        value: function resizeHideInfo(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n             <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n                    <g display="inline" class="' + main_svg + '">\n                       <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                        <g class="' + minor_svg + '" >\n                             <title>' + marker_icon_title + '</title>\n                            <path  d="M 175.0204,456.47655 H 92.06649 L 287.6426,259.90358 210.67085,259.93163 53.66462,417.07152 V 336.12075 H -0.64761 V 510.78771 H 172.0204"\n                                  stroke="null"></path>\n                        </g>\n                        <g>\n                            <rect opacity="1"  height="170.66667" width="478.81481" y="54.51852" x="18.96296" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="null" stroke-width="36"\n                                  stroke="' + main_color + '" fill="#ffffff"></rect>\n                        </g>\n                    </g>\n                </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'resizeShowInfo',
        value: function resizeShowInfo(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n             <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n                    <g display="inline" class="' + main_svg + '">\n                       <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                        <g class="' + minor_svg + '" transform="rotate(-180 143.49749755859375,385.34564208984375) ">\n                             <title>' + marker_icon_title + '</title>\n                            <path  d="m175.0204,456.47655l-82.95391,0l195.57611,-196.57297l-76.97175,0.02805l-157.00623,157.13989l0,-80.95077l-54.31223,0l0,174.66696l172.66801,0"\n                                  stroke="null"></path>\n                        </g>\n                        <g>\n                            <rect opacity="1"  height="170.66667" width="478.81481" y="54.51852" x="18.96296" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="null" stroke-width="36"\n                                  stroke="' + main_color + '" fill="#ffffff"></rect>\n                        </g>\n                    </g>\n                </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'do_delete',
        value: function do_delete(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);

            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n            <g display="inline" class="' + main_svg + '" style="cursor: inherit">\n                <title>' + marker_icon_title + '</title>\n                <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                <g class="' + minor_svg + '" stroke="null" display="inline">\n                    <rect stroke="null" transform="rotate(-90 393.08407592773443,392.5536193847656) " height="183.41317" width="44.95837" y="300.84702" x="370.60487" stroke-width="5" ></rect>\n                </g>\n                <g display="inline">\n                    <rect stroke="null" fill="#ffffff" stroke-width="5" x="185.00379" y="374.64714" width="213.52858" height="27.5" transform="rotate(-78.98575592041016 291.76806640624994,388.39712524414057)"></rect>\n                </g>\n                <g display="inline" stroke="null">\n                    <path fill="' + main_color + '"  d="m255.5,1.99999c-69.87445,0 -126.5,56.64136 -126.5,126.5c0,50.89648 30.20484,94.44312 73.50342,114.51709l52.99658,264.98291l52.99658,-264.98291c43.29957,-20.07397 73.50342,-63.62061 73.50342,-114.51709c0,-69.85864 -56.64037,-126.5 -126.5,-126.5zm0,0" stroke="null"></path>\n                </g>\n            </g>\n        </svg> ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'do_edit',
        value: function do_edit(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n         <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n            <g display="inline" class="' + main_svg + '">\n                <title>' + marker_icon_title + '</title>\n                <g class="' + minor_svg + '" stroke="null" display="inline">\n                    <path d="m421.83777,313.61972l-83.83821,83.83821l44.59479,44.59479l83.83821,-83.83821l-44.59479,-44.59479z" stroke="null"/>\n                    <path  d="m323.34562,409.14034l-55.94706,102.20756l102.22026,-55.94621l-46.2732,-46.26135z" stroke="null"/>\n                    <path d="m464.43963,268.66817l-30.15888,30.12758l45.22801,45.22801l30.13825,-30.15888l-45.20737,-45.1967l-0.00001,-0.00001z" id="svg_26" stroke="null"/>\n                </g>\n                <g display="inline" stroke="null">\n                    <path fill="' + main_color + '" d="m255.5,1.99999c-69.87445,0 -126.5,56.64136 -126.5,126.5c0,50.89648 30.20484,94.44312 73.50342,114.51709l52.99658,264.98291l52.99658,-264.98291c43.29957,-20.07397 73.50342,-63.62061 73.50342,-114.51709c0,-69.85864 -56.64037,-126.5 -126.5,-126.5zm0,0" stroke="null"/>\n                </g>\n            </g>\n         </svg>';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'orcaHover',
        value: function orcaHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path fill="' + main_color + '" d="m462.69404,269.48885c-4.16165,-1.39225 -8.41392,-4.78536 -10.94698,-8.41748c-24.88993,-35.70275 -52.74383,-68.42553 -89.53053,-92.61889c-26.77084,-17.60615 -56.57941,-25.7633 -88.07697,-28.83745c-29.61576,-2.88845 -59.00407,-0.47889 -88.2982,3.9111c-17.73321,2.65745 -26.24486,-1.66413 -34.22698,-17.77319c-8.82707,-17.80962 -11.67287,-37.09855 -13.48449,-56.58651c-0.81563,-8.75776 -3.34958,-10.46543 -10.98785,-6.09765c-13.66574,7.81597 -19.33247,20.97439 -19.6621,35.55082c-0.4709,20.66609 0.39093,41.4379 2.0444,62.05245c1.12748,14.03979 -0.9027,25.54918 -10.23353,37.19273c-17.04819,21.26848 -33.75964,42.86569 -48.29609,65.92446c-1.59127,-1.10883 -3.1861,-2.21854 -4.77737,-3.32736c-2.51618,-3.29449 -5.33622,-6.82976 -7.80087,-10.60314c-3.30959,-5.06435 -6.32954,-5.9706 -10.83859,-1.14525c-13.65596,14.62619 -18.68299,42.95187 -11.85412,62.90717c0.50022,4.06747 1.93245,8.00789 4.29226,11.36102c-9.08028,20.7496 -16.26899,42.16645 -18.72653,65.09817c-1.12748,10.51962 0.52954,21.36265 1.21455,32.04132c0.39182,6.06033 1.689,12.06381 2.06661,18.12147c0.73211,11.80259 14.66261,24.81707 26.27774,22.9788c7.5361,-1.19323 15.99001,-2.90445 21.84421,-7.29355c23.59186,-17.69323 50.46399,-29.52869 75.63556,-44.35212c11.83191,-6.96747 22.69271,-15.17793 32.58862,-25.09161c4.62632,-3.52816 8.63871,-7.84885 11.78926,-12.74261c42.61514,4.03104 88.84817,-12.11889 113.3756,-40.94835c5.25981,-6.18383 9.38148,-13.67373 12.58268,-21.17696c2.99329,-7.02167 0.34029,-9.88525 -7.32642,-9.93234c-13.17352,-0.07996 -26.3497,-0.02221 -39.52322,-0.02221l0,0.94001c-5.87198,0 -11.74484,0.02132 -17.6177,0.03199c5.41974,-1.80095 10.66089,-3.97951 15.6124,-6.81821c6.5721,-2.66456 12.68041,-6.82976 18.78517,-12.25305c13.14775,-11.68265 28.26083,-22.05745 44.138,-29.57933c18.08505,-8.56585 35.68054,-10.32416 52.63099,-7.15583c3.09547,0.97555 6.22115,2.10659 9.39214,3.40377c2.23986,0.91691 4.55702,1.26164 6.85553,1.14881c10.21132,3.81336 20.15521,9.27664 29.79346,15.96424c1.76897,1.22966 3.48729,2.53484 5.16919,3.88977c-0.12794,1.20745 -0.25411,2.41489 -0.38116,3.62145c-0.09773,0.04709 -0.19991,0.09773 -0.29764,0.14482c-1.69256,10.83148 -10.1278,16.5924 -16.84917,23.62029c-8.66714,9.06251 -16.26544,18.63679 -13.18773,32.30608c0.99688,4.43264 3.16122,8.65292 5.15852,12.78969c0.62371,1.28652 2.54461,2.84492 3.70497,2.72142s2.81293,-2.08082 3.04572,-3.4402c1.72188,-10.04873 10.421,-9.56984 17.18235,-13.0749c6.26824,-3.25184 12.5427,-2.33848 18.2272,-4.48417c3.30959,-1.25098 5.10344,-6.51079 7.65516,-10.35348c0.17059,0.13416 0.34118,0.27276 0.51088,0.39893c3.58147,9.27575 12.12955,10.96564 21.1201,9.38503c13.57156,-2.38913 24.13916,4.01683 34.63035,10.41478c3.76183,2.29406 6.00614,7.08298 10.34815,12.47695c1.1568,-4.84311 2.51973,-7.90926 2.52773,-10.97986c0.08974,-32.93158 -16.12861,-54.86286 -47.27522,-65.29186z" stroke="null"></path>\n                  <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'swimHover',
        value: function swimHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path fill="' + main_color + '" d="m131.69976,223.00068c23.91062,0 43.28664,-21.03779 43.28664,-47.00159c0,-25.97096 -19.37602,-47.01794 -43.28664,-47.01794c-23.90244,0 -43.28766,21.04698 -43.28766,47.01794c0,25.96381 19.38522,47.00159 43.28766,47.00159zm-129.64427,-185.00068m41.80372,216.01212l42.67037,20.87733c0,0.14206 -0.04088,0.27798 -0.04088,0.42004l0,93.39407c23.16967,-5.74566 48.28113,0 67.3945,17.563c6.59801,-6.16672 13.92878,-10.81374 21.6377,-14.28239l0.51917,-50.23621l4.68074,5.52287c2.95459,3.47683 6.89643,5.77325 11.19903,6.51522l66.30914,11.44942c10.62058,1.83244 20.51044,-6.04204 22.18242,-17.48226c1.67812,-11.48315 -5.53104,-22.27133 -16.09439,-24.09355l-59.66923,-10.30581c-36.77141,-43.30912 -6.72371,-8.02573 -43.55031,-51.29908c-3.29083,-3.86928 -7.93989,-7.2296 -21.86254,-7.2296l-15.47506,0c-5.84275,0 -11.29714,1.59125 -16.21703,4.18201l-40.62332,-19.87782l-27.48045,-75.02779c-3.94899,-10.78614 -15.19606,-16.09541 -25.16869,-11.7693c-9.93891,4.28932 -14.79339,16.53385 -10.83724,27.33839l30.37883,82.93906c1.85901,5.07523 5.45541,9.15811 10.04724,11.40241l0,-0.00001zm-41.80372,-216.01212m358.12474,185.00068c23.91164,0 43.28766,-21.03779 43.28766,-47.00159c0,-25.97096 -19.37602,-47.01794 -43.28766,-47.01794c-23.89324,0 -43.27846,21.04698 -43.27846,47.01794c0.00102,25.96381 19.38624,47.00159 43.27846,47.00159zm-358.12474,-185.00068m260.23899,204.60869c1.85799,5.07523 5.45439,9.15913 10.04622,11.40241l42.66117,20.87733c0,0.14206 -0.0419,0.27798 -0.0419,0.42004l0,91.35724c16.10257,1.49109 31.8178,7.79374 44.233,19.50888c12.58895,-11.86742 28.54332,-18.17926 44.86051,-19.56305l0.4599,-44.87482l4.69812,5.53309c2.95459,3.47683 6.89541,5.77325 11.19903,6.51522c2.45177,0.42106 66.8927,11.71616 69.36899,11.71616c9.3625,0 17.59877,-7.39107 19.11235,-17.749c1.67914,-11.48315 -5.52798,-22.27133 -16.09235,-24.09355l-59.66208,-10.30581c-100.05953,-117.8811 57.25936,67.45888 -43.54827,-51.29908c-3.3082,-3.89687 -7.98281,-7.2296 -21.87071,-7.2296l-15.48426,0c-5.84275,0 -11.29101,1.59125 -16.2109,4.18201l-40.62127,-19.87782l-27.48249,-75.02779c-3.94797,-10.78717 -15.18686,-16.09541 -25.16767,-11.77033c-9.93993,4.28932 -14.79339,16.53385 -10.83622,27.33839l30.37883,82.94008zm-260.23899,-204.60869m473.49786,371.7878c-7.58628,8.25875 -19.87884,8.23218 -27.47227,-0.01737c-20.07711,-21.82472 -55.07843,-21.82472 -75.15451,0.01737c-7.33997,7.97259 -20.12514,7.95419 -27.48147,-0.01737c-19.90235,-21.63872 -55.21742,-21.64485 -75.13816,-0.0092l-0.29433,0.32295c-7.62,7.97974 -19.69795,7.83666 -27.21882,-0.31375c-20.15887,-21.91466 -53.62923,-23.40677 -75.7953,0.70518c-6.92096,7.49838 -19.28608,7.52598 -26.22339,-0.02555c-20.37042,-22.12928 -53.51273,-22.12928 -73.91994,0.01737c-8.317,9.05284 -22.89782,9.06204 -31.23219,-0.0092c-6.58165,-7.15091 -17.25436,-7.14171 -23.83499,-0.00818c-6.5837,7.14886 -6.5837,18.74034 -0.0092,25.89022c10.53984,11.4484 24.55141,17.75718 39.46131,17.75718c14.91603,0 28.92964,-6.3098 39.45313,-17.749c7.24084,-7.86426 19.01423,-7.86426 26.2704,0c19.56713,21.2892 53.61391,22.02095 74.5127,-0.697c7.63533,-8.2935 19.94527,-8.19436 27.52235,0.03679c20.2161,21.9586 53.86021,23.07565 75.10546,0l0.28616,-0.31375c7.28274,-7.61489 20.07813,-7.48101 27.21779,0.26776c20.09346,21.82472 55.07843,21.82472 75.15349,0.0184c7.35735,-7.98894 20.13536,-7.99814 27.49067,-0.0092c20.74243,22.53194 54.41106,22.60246 75.16167,-0.01635c6.57552,-7.1601 6.55815,-18.7526 -0.03168,-25.88307c-6.59903,-7.14886 -17.26253,-7.13149 -23.82886,0.03577l-0.00002,0z" stroke="null"></path>\n                  <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'treeHover',
        value: function treeHover(clear_all_options) {

            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path fill="' + main_color + '" d="m387.15613,447.1595l-49.26753,0c-6.03664,0 -10.94834,4.9117 -10.94834,10.94834l0,41.05627c0,6.03664 4.9117,10.94834 10.94834,10.94834l49.26753,0c6.03664,0 10.94834,-4.9117 10.94834,-10.94834l0,-41.05627c0,-6.03664 -4.9117,-10.94834 -10.94834,-10.94834zm-387.15613,-447.1595m487.67831,406.98183l-115.54604,-281.67204c-2.5277,-6.16528 -7.06989,-6.8304 -8.90374,-6.8304c-1.84206,0 -6.40067,0.67195 -8.95027,6.88787l-25.49184,62.19889c-2.11029,5.14435 -2.11029,12.61112 0,17.75684l84.85921,206.85246c2.45927,5.99832 9.09123,10.35029 15.76971,10.35029l47.68549,0c4.16311,0 7.73363,-1.76542 9.79876,-4.84464c2.03776,-3.0368 2.32242,-6.93714 0.7787,-10.69927l0.00002,0zm-487.67831,-406.98183m348.62755,391.63225c2.08429,-3.10796 2.38537,-7.07263 0.82523,-10.87854l-152.49532,-371.89731c-2.53865,-6.18855 -7.08905,-6.8564 -8.927,-6.8564s-6.38836,0.66785 -8.927,6.85777l-152.49395,371.89457c-1.56151,3.80592 -1.26043,7.77058 0.82523,10.87854c2.08429,3.10796 5.63976,4.89117 9.75223,4.89117l301.68698,0c4.11384,0.00137 7.66931,-1.78184 9.7536,-4.8898zm-348.62755,-391.63225m221.56249,432.10553l-67.05858,0c-6.03664,0 -10.94834,4.9117 -10.94834,10.94834l0,56.11024c0,6.03664 4.9117,10.94834 10.94834,10.94834l67.05858,0c6.03664,0 10.94834,-4.9117 10.94834,-10.94834l0,-56.11024c0,-6.03664 -4.9117,-10.94834 -10.94834,-10.94834z" stroke="null"></path>\n                  <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'parkHover',
        value: function parkHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path fill="' + main_color + '" d="m287.96851,354.81117c-3.8843,-3.83228 -9.12938,-5.97887 -14.57982,-5.97887l-18.36463,0l0,-11.87833l15.41856,0c4.95121,0 8.96693,-4.01481 8.96693,-8.96784l0,-11.73048c0,-4.95212 -4.01572,-8.96784 -8.96693,-8.96784l-15.41856,0l0,-15.3492l15.41856,0c4.95121,0 8.96693,-4.01572 8.96693,-8.96784l0,-11.73139c0,-4.95212 -4.01572,-8.96693 -8.96693,-8.96693l-15.41856,0l0,-11.59814c0,-8.28882 -6.70899,-15.00603 -15.00238,-15.00603s-15.00603,6.71721 -15.00603,15.00603l0,11.59814l-135.05429,0l0,-11.59814c0,-8.28882 -6.70899,-15.00603 -15.00238,-15.00603c-8.2943,0 -15.00603,6.71721 -15.00603,15.00603l0,11.59814l-15.41947,0c-4.95029,0 -8.96601,4.01481 -8.96601,8.96693l0,11.73139c0,4.95212 4.01572,8.96784 8.96601,8.96784l15.41947,0l0,15.3492l-15.41947,0c-4.95029,0 -8.96601,4.01572 -8.96601,8.96784l0,11.73048c0,4.95303 4.01572,8.96784 8.96601,8.96784l15.41947,0l0,11.87833l-18.3765,0c-5.45043,0 -10.69917,2.14659 -14.58255,5.97887l-23.38612,23.06486c-2.58101,2.5509 -3.3723,6.41785 -1.99326,9.78924c1.37538,3.36408 4.65915,5.56086 8.2943,5.56086l20.03025,0l0,37.51416c0,8.28608 6.71174,15.00603 15.00603,15.00603c8.29339,0 15.00603,-6.71995 15.00603,-15.00603l0,-37.51416l195.07203,0l0,37.51416c0,8.28608 6.71174,15.00603 15.00603,15.00603c8.2943,0 15.00603,-6.71995 15.00603,-15.00603l0,-37.51416l20.01656,0c3.63697,0 6.918,-2.19678 8.29795,-5.56086c1.37538,-3.37047 0.58502,-7.23835 -1.99417,-9.78924l-23.38703,-23.06486l-0.00001,0l-0.00001,0zm-198.00715,-62.87347l135.05429,0l0,15.3492l-135.05429,0l0,-15.3492zm0,45.01718l135.05429,0l0,11.87833l-135.05429,0l0,-11.87833zm-1.89104,-336.53047c0,-0.02921 -0.02464,-0.05932 -0.05567,-0.05932l-79.02854,0c-4.95485,0 -8.97149,4.01664 -8.97149,8.96967l0,77.78367c0,0.0429 -0.0146,0.07301 -0.0146,0.14603c0.3678,0 0.73561,0.10313 1.12896,0.10313c48.00616,0 86.94134,-38.9215 86.94134,-86.94317l-0.00001,0l0.00001,-0.00001zm-85.00558,111.73662l0,73.29975c0,6.21433 5.04156,11.25498 11.25407,11.25498c6.21342,0 11.25498,-5.04065 11.25498,-11.25498l0,-73.29975c0,-6.21251 -5.04156,-11.25315 -11.25498,-11.25315c-6.21251,0 -11.25407,5.04065 -11.25407,11.25315zm54.82011,-22.93252c-5.37742,3.10579 -7.22283,9.98546 -4.11976,15.37292l36.66721,63.4959c2.08179,3.61142 5.86295,5.62749 9.7573,5.62749c1.90564,0 3.83958,-0.48371 5.61288,-1.50955c5.38107,-3.10671 7.22648,-9.9882 4.11976,-15.37292l-36.66721,-63.4959c-3.10398,-5.37012 -9.96264,-7.24564 -15.37019,-4.11794l0.00001,0zm36.02013,-16.5311l63.49681,36.66539c1.77239,1.02583 3.70816,1.50955 5.61288,1.50955c3.89525,0 7.67551,-2.01607 9.7573,-5.62749c3.10762,-5.38473 1.26131,-12.26439 -4.11612,-15.37292l-63.49773,-36.66448c-5.39111,-3.12861 -12.28082,-1.25948 -15.37019,4.11976c-3.10762,5.38381 -1.26131,12.26439 4.11703,15.37019l0.00002,0zm18.81641,-47.66939l73.31435,-0.0146c6.21251,0 11.25498,-5.04065 11.25498,-11.25315c0,-6.22072 -5.04247,-11.25498 -11.25498,-11.25498l-73.31435,0.01551c-6.21251,0 -11.25498,5.04065 -11.25498,11.25407c0,6.22072 5.04247,11.25315 11.25498,11.25315zm288.33265,-25.08003c-18.90494,0 -35.22794,23.5723 -43.15443,57.82552c26.31669,9.72353 45.71902,40.48033 47.91763,79.19738c15.16483,8.52064 25.86491,23.51207 29.60136,41.02245c8.60369,-18.8876 13.93639,-44.81823 13.93639,-73.45855c-0.00091,-57.75981 -21.63198,-104.5868 -48.30095,-104.5868zm-15.00694,363.36373c0,4.95212 4.01664,8.96693 8.96693,8.96693l12.07455,0c4.95485,0 8.97058,-4.01481 8.97058,-8.96693l0,-124.6426c-8.3518,7.52492 -18.62475,12.58108 -30.01298,14.25947l0,110.38313l0.00091,0l0.00001,0zm4.80791,-216.61729c0.0146,-0.78307 0.16245,-1.52415 0.16245,-2.31543c0,-41.48608 -22.67242,-75.11686 -50.64741,-75.11686c-27.97043,0 -50.64194,33.63078 -50.64194,75.11686c0,9.75364 1.34892,19.00624 3.63332,27.55608c-12.38395,7.8188 -20.51578,20.75856 -20.51578,35.45702c0,23.89995 21.4102,43.28129 47.83276,43.28129c1.15543,0 2.22599,-0.28749 3.36864,-0.3678l0,113.00613c0,4.95212 4.01572,8.96693 8.96693,8.96693l26.52569,0c4.95121,0 8.96693,-4.01481 8.96693,-8.96693l0,-125.76975c3.02001,0.75386 6.13858,1.25309 9.37855,1.25309c24.34167,0 44.07805,-21.13823 44.07805,-47.20849c0.00091,-21.19664 -13.14146,-38.92789 -31.10817,-44.89215l0,0.00001l-0.00002,0z" stroke="null"></path>\n                  <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                      <rect stroke-width="5" x="443.93749" y="413.09545" width="36.95837" height="100.80909" transform="rotate(45 462.4166870117186,463.50000000000006)" stroke="null"></rect>\n                      <rect stroke-width="5" x="379.02084" y="345.71007" width="36.95837" height="189.91314" transform="rotate(90 397.5000305175781,440.6666564941407)" stroke="null"></rect>\n                      <rect stroke-width="5" x="443.2708" y="367.26214" width="36.95837" height="100.80909" transform="rotate(135 461.75000000000006,417.6666870117187)"  stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'waterHover',
        value: function waterHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path stroke="null" fill="' + main_color + '" d="m -39.42355,256.63632 c 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.02206 -10.55439,-23.57645 -23.57645,-23.57645 -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61796,-11.08617 -66.28651,-30.41886 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67379,19.33531 -40.83442,30.42148 -66.28913,30.42148 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 z m 725.14179,78.3367 c -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28651,30.4241 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.01944 -10.55701,-23.57645 -23.57907,-23.57645 z M 587.05157,460.46 c -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33793 -40.8318,30.4241 -66.28651,30.4241 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47498,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47498,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.02206 -10.55701,-23.57645 -23.57907,-23.57645 z"/>\n                   <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'Hover',
        value: function Hover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path stroke="null" fill="' + main_color + '" d="M260,150.168V110h109.271l-27.5-55l27.5-55H230v150.168L2.821,466.145L0,470.167V490h475l15-0.1v-19.833L260,150.168z M260,30h60.729l-12.5,25l12.5,25H260V30z M245,180.695l94.541,131.495l-36.1,24.595L245,296.771l-58.441,40.014l-36.1-24.595 L245,180.695z M44.188,460l88.753-123.444l53.66,36.56L245,333.129l58.399,39.986l53.66-36.56L445.813,460H44.188z"/>\n                   <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }]);

    return SvgButton;
}();

SvgButton.unique_class_count = 0;

module.exports = SvgButton;