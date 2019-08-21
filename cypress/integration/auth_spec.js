describe('Los estudiantes Login', function(){
	it('Visits Los estudiantes and great at login', function(){
		cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("afcarrion02@gmail.com")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("123456789")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		//cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
	})
})