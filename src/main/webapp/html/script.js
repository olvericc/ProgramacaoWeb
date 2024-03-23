function carregarArquivo()
{
	var xhttp = new XMLHttpRequest;
	
	xhttp.onreadystatechange = function()
	{
		if (xhttp.readyState == 4 && xhttp.status == 200)
		{
			document.getElementById("conteudo").innerHTML = xhttp.responseText;
		}
	};
	
	xhttp.open("GET", "livros.xml", true);
	xhttp.send();
}