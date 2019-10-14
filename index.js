function openDeposits() {
   document.querySelector('#withdrawal').classList.add('tohide');
   document.querySelector('#withdrawal').classList.remove('visible');
   document.querySelector('#deposits').classList.add('visible');
   document.querySelector('#deposits').classList.remove('hidden');
   document.querySelector('.tohide').classList.add('hidden');
   document.querySelector('.tohide').classList.remove('tohide');
   document.querySelector('#deposits').classList.add('active');
   document.querySelector('#depositsBtn').classList.add('active');
   document.querySelector('#withdrawalBtn').classList.remove('active');
   return false;
   }
function openWithdrawal() {
   document.querySelector('#deposits').classList.add('tohide');
   document.querySelector('#deposits').classList.remove('visible');
   document.querySelector('#withdrawal').classList.add('visible');
   document.querySelector('#withdrawal').classList.remove('hidden');
   document.querySelector('.tohide').classList.add('hidden');
   document.querySelector('.tohide').classList.remove('tohide');
   document.querySelector('#withdrawal').classList.add('active');
   document.querySelector('#withdrawalBtn').classList.add('active');
   document.querySelector('#depositsBtn').classList.remove('active');
   return false;
}

function togglePanel(idid) {
	if(document.getElementById(idid).classList.contains('closed')){
		document.getElementById(idid).classList.add('opened');
		document.getElementById(idid).classList.remove('closed');
		
		document.getElementById('I'+idid).classList.add('Iopened');
		document.getElementById('I'+idid).classList.remove('Iclosed')		
		
	} else{
		document.getElementById(idid).classList.remove('opened');
		document.getElementById(idid).classList.add('closed');
		document.getElementById('I'+idid).classList.remove('Iopened');
		document.getElementById('I'+idid).classList.add('Iclosed');		
	}
}





