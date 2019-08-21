describe('Los estudiantes Login', function(){
	it('Visits Los estudiantes and fails at create account', function(){
		cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.contains('Ingresar').click()
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Andres")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Carrion")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("afcarrion02@gmail.com")
		cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("universidad-de-los-andes")
		cy.get('.cajaSignUp').find('[type="checkbox"]').check() 
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("16")
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("123456789")
		cy.get('.cajaSignUp').find('input[name="acepta"]').check() 

		cy.get('.cajaSignUp').contains('Registrarse').click()

		cy.contains('Error: Ya existe un usuario registrado con el correo')
		cy.contains('Ok').click()
	})
})