$(document).ready(function(){
    //jquery Effects
    $('#hide').hide();


    $('#btnShow').click(function(){
        $('#hide').show();
        $('#btnShow').hide();
    })
    
    $('#btnHide').click(function(){
        $('#hide').hide();
        $('#btnShow').show();
    })
    $('#btnMe').click(function(){
        alert("hello")
    })
    //changing css
    $('#btnMe').mouseenter(function(){
        $('#btnMe').css('background-color','red');
    })
    $('#btn').on({
        mouseenter:function(){
            $(this).css('background-color','grey');
        },
        mouseleave:function(){
            $(this).css('background-color','red')
        },
        dblclick:function(){
            $(this).css("background-color",'yellow')
        }

    })
let count=2
    $('#addMore').click(function(){
        let name =$('#country_name').val()
        let continent = $('#continent').val()
        $('tbody').append("<tr><td>"+count +"</td><td>"+name+"</td><td>"+continent+"</td></tr>")
        count++
    })

    $('#field1').keyup(function(){
        $('#field2').val($('#field1').val())
    })





let data_id=1;

    $('#add').click(function(){
        let data =$('#input_field').val()
        let data_div = $(
            "<p>"+ data+ "<button class='delete'  id="+data_id +">X</button> </p> "
        )
        $('.data').append(data_div)
        data_id++
    })
    $('.delete').click(function(){
       console.log('click')
        console.log($(this).attr('id'))
    })
})