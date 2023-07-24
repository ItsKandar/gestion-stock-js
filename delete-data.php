<?php
  $dataToDelete = $_POST['data'];
  $file = file('data.txt');
  $newFile = '';
  foreach ($file as $line) {
    if (trim($line) !== trim($dataToDelete)) {
      $newFile .= $line;
    }
  }
  file_put_contents('data.txt', $newFile);
?>