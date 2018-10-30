const { assert, expect } = require('chai');
const request = require('supertest');

const app = require('../index.js');
const { forms, form, updatedForm, newForm } = require('./formFixtures');
const { fields, field, newField, updatedField } = require('./fieldFixtures');
const bookshelf = require('../database/bookshelf');

describe('Queries', () => {
	before((done) => {
		bookshelf.knex.migrate.latest()
			.then(() => {
				return bookshelf.knex.seed.run();
			})
			.catch(error => console.log(error))
			.then(() => done())
	});

	describe('Form queries', () => {
		it('Should list all records', (done) => {
			request(app)
				.get('/forms')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.forms).to.be.an('array');
					assert.sameDeepMembers(response.body.forms, forms);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should return one form with matching ID', (done) => {
			request(app)
				.get('/forms/4')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.eql(forms[3]);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should create a form', (done) => {
			request(app)
				.post('/forms')
				.send(form)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.be.an('object');
					form.id = newForm.id = updatedForm.id = response.body.message.id;
					expect(form).to.deep.equal(response.body.message);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should return newly created form', (done) => {
			request(app)
				.get(`/forms/${form.id}`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.deep.equal(newForm);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should update a form', (done) => {
			form.firstName = 'Larry';
			request(app)
				.put(`/forms/${form.id}`)
				.send(form)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.be.an('object');
					expect(form).to.deep.equal(response.body.message);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should return newly updated form', (done) => {
			request(app)
				.get(`/forms/${form.id}`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.eql(updatedForm);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should delete a form', (done) => {
			request(app)
				.delete(`/forms/${form.id}`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then(done())
				.catch(error => {
					done(error);
				});
		});

		it('Should not return form', (done) => {
			request(app)
				.get(`/forms/${form.id}`)
				.set('Accept', 'application/json')
				.expect(404)
				.then(done())
				.catch(error => {
					done(error);
				});
		});
	});

	describe('Field queries', () => {
		it('Should list all fields', (done) => {
			request(app)
				.get('/fields')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.be.an('array');
					assert.sameDeepMembers(response.body.message, fields);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should return one field with matching ID', (done) => {
			request(app)
				.get('/fields/1')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.eql(fields[0]);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should create a field', (done) => {
			request(app)
				.post('/fields')
				.send(field)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.be.an('object');
					field.id = newField.id = updatedField.id = response.body.message.id;
					expect(field).to.deep.equal(response.body.message);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should return newly created field', (done) => {
			request(app)
				.get(`/fields/${field.id}`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.deep.equal(newField);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should update a field', (done) => {
			field.required = true;
			request(app)
				.put(`/fields/${field.id}`)
				.send(field)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.be.an('object');
					expect(field).to.deep.equal(response.body.message);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should return newly updated field', (done) => {
			request(app)
				.get(`/fields/${field.id}`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((response) => {
					expect(response.body.message).to.eql(updatedField);
					done();
				})
				.catch(error => {
					done(error);
				});
		});

		it('Should delete a field', (done) => {
			request(app)
				.delete(`/fields/${field.id}`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.then(done())
				.catch(error => {
					done(error);
				});
		});

		it('Should not return field', (done) => {
			request(app)
				.get(`/fields/${field.id}`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(404)
				.then(done())
				.catch(error => {
					done(error);
				});
		});
	});
});