/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("select").formSelect();
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });

    // Custom image URL toggle
    $("#use_custom_image").on("change", function () {
        if ($(this).is(":checked")) {
            $("#custom-image-row").show();
            // Deselect all preset radios and add a hidden radio for the custom URL
            $("input[name='image_url']").prop("checked", false);
        } else {
            $("#custom-image-row").hide();
            $("#custom_image_url_hidden").remove();
        }
    });

    // On form submit, inject custom URL as the selected image_url if checkbox is checked
    $("form").on("submit", function () {
        if ($("#use_custom_image").is(":checked")) {
            var customUrl = $("#custom_image_url").val().trim();
            if (customUrl) {
                $("input[name='image_url']").prop("checked", false);
                if ($("#custom_image_url_hidden").length === 0) {
                    $(this).append(
                        $("<input>").attr({
                            type: "hidden",
                            id: "custom_image_url_hidden",
                            name: "image_url",
                            value: customUrl
                        })
                    );
                } else {
                    $("#custom_image_url_hidden").val(customUrl);
                }
            }
        }
    });

    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
        if ($("select.validate").prop("required")) {
        $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
    }
    $(".select-wrapper input.select-dropdown").on("focusin", function () {
        $(this).parent(".select-wrapper").on("change", function () {
            if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                $(this).children("input").css(classValid);
            }
        });
    }).on("click", function () {
        if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
            $(this).parent(".select-wrapper").children("input").css(classValid);
        } else {
            $(".select-wrapper input.select-dropdown").on("focusout", function () {
                if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                    if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                        $(this).parent(".select-wrapper").children("input").css(classInvalid);
                    }
                }
            });
        }
    });
}
});



