CREATE DATABASE node_crud;
USE node_crud;

CREATE TABLE Usuarios (
    IdUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Telefono VARCHAR(15) DEFAULT NULL
);

CREATE TABLE Deportes (
    IdDeporte INT AUTO_INCREMENT PRIMARY KEY,
    NombreDeporte VARCHAR(50) NOT NULL
);

CREATE TABLE UsuarioDeportes (
    IdUsuario INT,
    IdDeporte INT,
    PRIMARY KEY (IdUsuario, IdDeporte),

    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario) ON DELETE CASCADE,
    FOREIGN KEY (IdDeporte) REFERENCES Deportes(IdDeporte) ON DELETE CASCADE
);

INSERT INTO Usuarios (Nombre, Apellido, Telefono)
VALUES ('Diego', 'Arroyo', '5584075908'),
       ('Aleks', 'Velázquez', '0123456789'),
       ('Emmanuel', 'Arteaga', NULL);

INSERT INTO Deportes (NombreDeporte)
VALUES ('Fútbol'),
       ('Powerlift'),
       ('GYM'),
       ('Americano'),
       ('Béisbol'),
       ('Atletismo'),
       ('Boxeo'),
       ('Baloncesto'),
       ('Natación'),
       ('Voleibol');
       
SELECT Usuarios.IdUsuario, Usuarios.Nombre, Usuarios.Apellido, Usuarios.Telefono,
GROUP_CONCAT(Deportes.NombreDeporte SEPARATOR ', ') AS Deportes
FROM Usuarios
LEFT JOIN UsuarioDeportes ON Usuarios.IdUsuario = UsuarioDeportes.IdUsuario
LEFT JOIN Deportes ON UsuarioDeportes.IdDeporte = Deportes.IdDeporte
GROUP BY Usuarios.IdUsuario;