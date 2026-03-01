<script>
document.getElementById("sininho").addEventListener("click", function() {
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.showSlidedownPrompt();
  });
});
</script>
