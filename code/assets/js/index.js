/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...




// ==================================================
// $(function(){


$('form').on('keydown',function(event){
    if(event.keyCode == 13) return false
})

   $('#title').keydown(function(e){

    
    if(e.keyCode == 13){
        $('#todolist').append(
        `
        <li>
                    <input type="checkbox" />
                    <p onclick="edit(1)"> ${$('#title').val()}</p>
                    <a href="javascript:remove(1)">-</a>
                </li>
        `)
    }
    
})

$('#todolist').on('click','input',function(){


        $(this).parent('li').remove()
        // console.log(this)
        // $(this).remove()
        $('#donelist').append(`
        <li>
        <input type="checkbox" checked="checked" />
        <p onclick="edit(4)">${$(this).next('p').text()}</p>
        <a href="javascript:remove(4)">-</a>
    </li> 
        `)
})
$('#todolist').on('click','a',function(){
    $(this).parent('li').remove()
})


$('#donelist').on('click','input',function(){


    $(this).parent('li').remove()
    // console.log(this)
    // $(this).remove()
    $('#todolist').append(`

    <li>
    <input type="checkbox" />
    <p onclick="edit(1)">${$(this).next('p').text()}</p>
    <a href="javascript:remove(1)">-</a>
</li>
    `)
})




// })



