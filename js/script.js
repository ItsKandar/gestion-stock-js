var modifiedData = null;

// Fonction pour charger les données à partir du fichier texte
function loadTableData() {
    $.ajax({
        url: 'data.txt',
        dataType: 'text',
        success: function (data) {
            var lines = data.split('\n');
            var tableBody = $('#data-table tbody');
            tableBody.empty();
            $.each(lines, function (index, line) {
                if (line.trim() !== '') {
                    var columns = line.split(',');
                    var row = $('<tr>');
                    $.each(columns, function (colIndex, column) {
                        row.append($('<td>').text(column));
                    });
                    row.append($('<td><button class="edit-btn">Modifier</button></td>'));
                    row.append($('<td><button class="delete-btn">Supprimer</button></td>'));
                    tableBody.append(row);
                }
            });
        }
    });
}

// Fonction pour charger les données dans les champs de modification
function loadModificationData(marque, modele, prix, type) {
    $('#marque').val(marque);
    $('#modele').val(modele);
    $('#prix').val(prix);
    $('#type').val(type);
}

function deleteDataFromTextFile(dataToDelete, callback) {
    $.ajax({
        type: 'POST',
        url: 'delete-data.php',
        data: { data: dataToDelete },
        success: function () {
            callback();
            loadTableData(); // Recharger les données après la suppression
        }
    });
}

// Fonction pour ajouter une nouvelle ligne de données ou mettre à jour une ligne existante
function addOrUpdateData() {
    var marque = $('#marque').val();
    var modele = $('#modele').val();
    var prix = $('#prix').val();
    var type = $('#type').val();

    if (marque.trim() !== '' && modele.trim() !== '' && prix.trim() !== '' && type.trim() !== '') {
        var newRow = marque + ',' + modele + ',' + prix + ',' + type + '\n';
        
        if ((type.trim() == 'HD' && (prix.trim() >= 50 && prix.trim() < 100)) || (type.trim() == 'Full HD' && (prix.trim() >= 100 && prix.trim() < 200)) || (type.trim() == '4K' && (prix.trim() >= 200 && prix.trim() < 300)) || (type.trim() == 'Smart TV' && (prix.trim() >= 300 && prix.trim() <= 400))) {

            var sendData = function () {
                // Ajouter la nouvelle ligne de données
                $.ajax({
                    type: 'POST',
                    url: 'save-data.php',
                    data: { data: newRow },
                    success: function () {
                        $('#marque').val('');
                        $('#modele').val('');
                        $('#prix').val('');
                        $('#type').val('');
                        loadTableData(); // Recharger les données après l'ajout ou la modification
                    }
                });
            }
        }

        else {
            alert("RAPPEL DES TARIFICATIONS A RESPECTER :\nTV HD : 50-99€\nTV Full HD : 100-199€\nTV 4K : 200-299€\nSmart TV : 300-399€");
        }

        // Vérifier si des données sont en cours de modification
        if (modifiedData !== null) {
            // Supprimer les données en cours de modification du fichier texte
            deleteDataFromTextFile(modifiedData, sendData);

            // Réinitialiser les données en cours de modification
            modifiedData = null;
        } else {
            sendData();
        }
    }
}

// Fonction pour modifier une ligne de données
function editData() {
    var row = $(this).closest('tr');
    var columns = row.find('td');
    var marque = $(columns[0]).text();
    var modele = $(columns[1]).text();
    var prix = $(columns[2]).text();
    var type = $(columns[3]).text();

    loadModificationData(marque, modele, prix, type);
    modifiedData = marque + ',' + modele + ',' + prix + ',' + type; // Stocker les données en cours de modification
}

// Fonction pour supprimer une ligne de données
function deleteData() {
    // Ajout de la confirmation de suppression
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette TV ?");
    if (confirmation) {
        var row = $(this).closest('tr');
        var columns = row.find('td');
        var marque = $(columns[0]).text();
        var modele = $(columns[1]).text();
        var prix = $(columns[2]).text();
        var type = $(columns[3]).text();

        var dataToDelete = marque + ',' + modele + ',' + prix + ',' + type;
        deleteDataFromTextFile(dataToDelete, function () { });

        // Supprimer la ligne de données du tableau
        row.remove();
        loadTableData();
    }
}

$(document).ready(function () {
    loadTableData();

    // Gérer le clic sur le bouton d'ajout ou de mise à jour
    $('#add-btn').click(function () {
        addOrUpdateData();
    });

    // Gérer le clic sur le bouton de modification
    $(document).on('click', '.edit-btn', editData);

    // Gérer le clic sur le bouton de suppression
    $(document).on('click', '.delete-btn', deleteData);
});