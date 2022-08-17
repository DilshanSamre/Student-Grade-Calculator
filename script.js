function addRow()
{

	var id = document.getElementById('id').value;
	var maths = document.getElementById('maths').value;
	var english = document.getElementById('english').value;
	var science = document.getElementById('science').value;
	
	
	var validId = new RegExp(/^[ST]+\-[0-9]{5}$/);
	
	
	var validMarks = new RegExp(/^\d+(\.\d*)?$/);
		
	
	if(id == "" || maths == "" || english == "" || science == "")
	{
		alert("One or more input fields are empty.!");
	}
	
	
	else if (!validId.test(id)) {
      alert("Invalid ID format. Please check again.!");
    }
	
	
    else if (!validMarks.test(maths) || !validMarks.test(english) || !validMarks.test(science)) {
      alert("You cann't enter non-numeric values for marks. Please check again.!");
    }
	

	else 
	{
		
		var total = parseFloat(maths) + parseFloat(english) + parseFloat(science);
		var avg = total/3;
		
		var average = avg.toFixed(2);
		
		
		var grade;
		if(average>=75){
			grade = "A";
		}
		else if(average>=65){
			grade = "B";
		}
		else if(average>=55){
			grade = "C";
		}
		else if(average>=40){
			grade = "S";
		}
		else{
			grade = "F";
		}
		
	
		var table = document.getElementsByTagName('table')[0];

		
		var newRow = table.insertRow(table.rows.length);

		
		var cel1 = newRow.insertCell(0);
		var cel2 = newRow.insertCell(1);
		var cel3 = newRow.insertCell(2);
		var cel4 = newRow.insertCell(3);
		var cel5 = newRow.insertCell(4);
		var cel6 = newRow.insertCell(5);
		var cel7 = newRow.insertCell(6);

		
		cel1.innerHTML = id;
		cel2.innerHTML = maths;
		cel3.innerHTML = english;
		cel4.innerHTML = science;
		cel5.innerHTML = total;
		cel6.innerHTML = average;
		cel7.innerHTML = grade;
		
	
		document.getElementById('id').value="";
		document.getElementById('maths').value="";
		document.getElementById('english').value="";
		document.getElementById('science').value="";
	}
}