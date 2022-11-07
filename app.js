window.onload = function() {
    document.getElementById("search_result").addEventListener("click", () => {
        fetch("http://localhost/info2180-lab4/superheroes.php")
          .then((result) => result.text())
          .then((data) => alert(data))
          .catch((err) => alert(err));
      });
}