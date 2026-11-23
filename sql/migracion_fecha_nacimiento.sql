ALTER TABLE usuarios
ADD fecha_nacimiento DATE AFTER password;

UPDATE usuarios SET fecha_nacimiento = '2000-11-05' WHERE usuario = 'admin';
UPDATE usuarios SET fecha_nacimiento = '2013-05-07' WHERE usuario = 'juan';
