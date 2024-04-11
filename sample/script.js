InlineEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "c4zi4pj5hu9u-eogyb9oeu8vy" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
