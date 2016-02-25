// console.log('mmfei plugins');
var indexDuration = null , iTaskName = null , s = 0 ;
var count = $('#tableBody > tr').size();
function cal(step , tr)
{
	if (indexDuration == null)
	{
		$('#tableHeader tr td').each(function(index){
			if($(this).text() == "Duration") { indexDuration = index; }
			if($(this).text() == "Task Name") { iTaskName = index; }
		});
	}

	b = tr;
	taskName = b.find('td:eq('+iTaskName+')');
	duration = b.find('td.clsCellBorder:eq('+(indexDuration -1 )+')');
			// console.log(tr.html())


	if(/<img /.test(taskName.html()))
	{
		taskName.find('td').each(function(){
			if ($(this).text() ) {
				$(this).text($(this).text() + '[有子任务]').css({'color':'red'});
			} 
		});
	}
	else
	{
		if (duration.text() == '')
		{
			taskName.find('td').css({'background':'#FFF0AC'});
		}
		else
		{
			t = duration.text();
			a = duration.text().replace(/d$/,'');
			v = parseFloat(a);
			// console.log("text:" +t  + " => " + a + " : " + v);
			s += v;
			// console.log("s = "+s+" + " + v)
		}
	}
	if (count == step + 1)
	{
		// console.log(s);   
		$('caption').html($('caption').html() + " <span style='color:red'> [掐指一算 , 总工作人天:"+s+"]</span>");
	}
}
$('#tableBody > tr').each(function(iTr){
	cal(iTr,$(this));
});
