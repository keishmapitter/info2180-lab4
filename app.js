


    function letsearchhero(HN){
        return fetch(`http://localhost/info2180-lab4/superheroes.php?query=${HN}`)
            .then((result) => result.text())
            .then((data) => data)
            .catch((err) => err);
    }


    document.getElementById("search_result").onclick = event => {
        event.preventDefault();
        letsearchhero(document.getElementById("search").value.trim()).then(
            (data) => (document.getElementById("result").innerHTML = data)
          );
        };
