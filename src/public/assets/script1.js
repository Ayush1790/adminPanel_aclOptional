$(document).ready(function () {
    $(document).on("click", "#controller", function () {
        let id = this.value;
        $.ajax({
            url: 'admin/change',
            type: 'post',
            data: 'name=' + id,
            datatype: 'json',
            success:function(value){
               $("#action").html(value);
            }
        })
    })
});