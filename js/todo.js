$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        function generateNewOrderListElement(inputValue){
            var uuid = generateUUID();
            var newLiElement = '<li id="'+uuid+'" class="123"><input name="done-todo" type="checkbox" class="done-todo">'+inputValue+'</li>';
            $("ol").append(newLiElement);
        }

        $("div#button").click(function(){
            var inputValue = $("input.input-text").val();
            generateNewOrderListElement(inputValue);
            $("input.input-text").val("");
        });

        $("input.done-todo").change(function(){
            //var input = $(this).val();
            console.log(this)
            console.log(this.checked)
            if(this.checked){
                $("input.done-todo").css('textDecoration', 'line-through');
            }
        })

        
        $(document).on("change", ":checkbox", function () {
            if ($(this).is(':checked')) {
                $(this).parent().addClass('checked');
            } else {
                $(this).parent().removeClass('checked');
            }
        });
        // $("ol li").attr("id", generateUUID());
        // alert($("li.123").attr("id"));

        // code to be implemented
        
    });