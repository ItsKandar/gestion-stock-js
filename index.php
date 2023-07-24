<!DOCTYPE html>
<html>
<head>
  <title>Gestion du stock JS</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <h1>Ajout de TV</h2>
  <input type="text" id="marque" required placeholder="Marque de la TV">
  <input type="text" id="modele" required placeholder="Modele de la TV">
  <input type="number" id="prix" required placeholder="Prix de la TV">
  <select id="type" required>
  <option value="" disabled selected>Type de la TV</option>
  <option value="HD">HD (50-99€)</option>
  <option value="Full HD">Full HD (100-199€)</option>
  <option value="4K">4K (200-299€)</option>
  <option value="Smart TV">Smart TV (300-399€)</option>
  </select>
  <button id="add-btn">Ajouter</button>

  <h2>Liste des TV</h2>
  <table id="data-table">
    <thead>
      <tr>
        <th class="infos">Marque</th>
        <th class="infos">Modele</th>
        <th class="infos">Prix (euros)</th>
        <th class="infos">Type</th>
        <th class="infos">Modifier</th>
        <th class="infos">Supprimer</th>
      </tr>
    </thead>
    <tbody>
      <!-- Emplacement pour les données -->
    </tbody>
  </table>
</body>
</html>