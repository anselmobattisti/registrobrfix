(function() {
  navigator.clipboard.readText()
  .then(url => {
    var    a      = document.createElement('a');
    a.href = url;
    let inp = document.getElementById('whois').value = a.hostname;
    let frm = document.getElementsByTagName('form')[0];
    frm.submit();
  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
})();

