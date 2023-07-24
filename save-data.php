<?php
try {
  $newData = $_POST['data'];
  $file = fopen('data.txt', 'a');
  if ($file === false) {
    throw new Exception('Erreur lors de l\'ouverture du fichier');
  }
  $result = fwrite($file, $newData);
  if ($result === false) {
    throw new Exception('Erreur lors de l\'écriture dans le fichier');
  }
  fclose($file);
} catch (Exception $e) {
  error_log($e->getMessage());
  http_response_code(500);
  exit();
}
?>