<?php
// Conexión a la base de datos MySQL
$mysqli = new mysqli("localhost", "root", "", "prueba3");

// Verificar la conexión
if ($mysqli->connect_error) {   
    die("Error de conexión a la base de datos: " . $mysqli->connect_error);
}

// Procesar el formulario de registro cuando se envíe
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Encriptar la contraseña
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insertar los datos del usuario en la base de datos
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";

    if ($mysqli->query($sql) === TRUE) {
        echo "Usuario registrado exitosamente";
    } else {
        echo "Error al registrar usuario: " . $mysqli->error;
    }
}
?>
