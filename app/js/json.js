// loading cities

$('#city').change(function() {
window.location = $(':selected',this).attr('href')
});

