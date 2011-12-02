<script type="text/javascript"> 
function validateAmount(amount){
	if(amount.value.match( /^[0-9]+(\.([0-9]+))?$/)){
		return true;
	}else{
		alert('You must enter a valid contribution amount.');
		amount.focus();
		return false;
	}
}
</script>
