describe('Prueba de busqueda de Profesores', function(){
	it('Visits Los estudiantes and we search a teacher', function(){
		cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.get('.buscador').click()
		cy.get('.Select-input  input').type("Mario Linares")
		cy.wait(1000)
		cy.get('.Select-input  input').clear()
		cy.wait(1000)
		cy.get('.Select-input  input').type("rubby")
		//cy.get('#react-select-required_error_checksum--option-0').click()
	})
})

describe('Prueba ir a la pagina del profesor', function(){
	it('Visits Los estudiantes and we goes to teachers web', function(){
		cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.get('.buscador').click()
		cy.get('.Select-input  input').type("Rubby")
		cy.wait(1000)
		cy.get('.Select-input  input').clear()
		cy.wait(1000)
		cy.get('.Select-input  input').type("Mario Linares")
		cy.get('#react-select-required_error_checksum--option-0').click()
	})
})

describe('Filtros por materia', function(){
	it('Visits Los estudiantes and search for subject', function(){
		cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.get('.buscador').click()
		cy.get('.Select-input  input').type("Rubby")
		cy.wait(1000)
		cy.get('.Select-input  input').clear()
		cy.wait(1000)
		cy.get('.Select-input  input').type("Mario Linares")
		cy.get('#react-select-required_error_checksum--option-0').click()
		cy.wait(1000)

		//Prueba un filtro
		cy.get('.materias').find('[type="checkbox"]').first().check()
		cy.wait(600)
		//Prueba Varios Filtros
		cy.get('.materias').find('[type="checkbox"]').first().uncheck()
		cy.wait(600)
		cy.get('.materias').find('[name="id:MISO4208"]').check()
		cy.get('.materias').find('[name="id:ISIS1206"]').check()

	})
})
