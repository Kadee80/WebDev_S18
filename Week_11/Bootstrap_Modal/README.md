# Bootstrap JavaScript:

Bootstrap has excellent documentation on all of their JavaScript Components. I suggest you read through these and attempt to use some of these on your own. Today will will look at the Modal component.

## But first, let’s make a mobile responsive navbar:

This example uses the collapse plugin behind the scenes. We have already linked to this in our minified version of bootstrap.js at the bottom of the body of our page. The code highlighted in red is for our collapse button, this is only visible when the page width is small, like on a mobile device. The code in blue is all of the links/dropdowns that are going to be shown when the collapsed button is clicked. The code in purple is very important! The `data-target` attribute text must match the `ID` or `CLASS` of the content to be shown.

```html
<nav class="navbar navbar-inverse navbar-fixed-top">
	 <div class="container-fluid">
	 <!-- Brand and toggle get grouped for better mobile display -->
		 <div class="navbar-header">
		 <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapseMe" aria-expanded="false">
		 <span class="sr-only">Toggle navigation</span>
		 <span class="icon-bar"></span>
		 <span class="icon-bar"></span>
		 <span class="icon-bar"></span>
		 </button>
		 <a class="navbar-brand" href="#">Brand</a>
		 </div>
		 <!-- Collect the nav links, forms, and other content for toggling -->
		 <div class="collapse navbar-collapse" id="collapseMe">
			 <ul class="nav navbar-nav">
			 <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
			 <li><a href="#">Link</a></li>
			 <li class="dropdown">
			 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
				 <ul class="dropdown-menu">
				 <li><a href="#">Action</a></li>
				 <li><a href="#">Another action</a></li>
				 <li><a href="#">Something else here</a></li>
				 <li role="separator" class="divider"></li>
				 <li><a href="#">Separated link</a></li>
				 <li role="separator" class="divider"></li>
				 <li><a href="#">One more separated link</a></li>
				 </ul>
			 </li>
			 </ul>
		 <ul class="nav navbar-nav navbar-right">
			 <li><a href="#">Link</a></li>
			 <li class="dropdown">
			 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
				 <ul class="dropdown-menu">
				 <li><a href="#">Action</a></li>
				 <li><a href="#">Another action</a></li>
				 <li><a href="#">Something else here</a></li>
				 <li role="separator" class="divider"></li>
				 <li><a href="#">Separated link</a></li>
				 </ul>
			 </li>
		 </ul>
	 </div>
	 <!-- /.navbar-collapse -->
	 </div>
	 <!-- /.container-fluid -->
 </nav>
 <!-- Fluid container example -->
 <div class="container-fluid" style="padding-top:70px;">
 </div>

```

## Modals:

Modals are a nice way of hiding and showing dialog prompts or additional information on a page when a user clicks the trigger element. We can modify this modal to show definitions of words within text or even mimic a lightbox

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
 Open PopUp Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	 <div class="modal-dialog" role="document">
		 <div class="modal-content">
			 <div class="modal-header">
			 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			 <h4 class="modal-title" id="myModalLabel">Title for Modal</h4>
			 </div>
			 <div class="modal-body">
			 Content Goes Here
			 </div>
			 <div class="modal-footer">
			 <p>Optional Footer with buttons</p>
			 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			 <button type="button" class="btn btn-primary">Save changes</button>
			 </div>
		 </div>
	 </div>
</div>
```

Now that we understand how this works, let’s make an anchor tag inside text open up a small modal with the definition of a word.

Let’s use this text for our paragraph:

```
Heaven stops the nose at it and the moon winks,
The bawdy wind that kisses all it meets
Is hush'd within the hollow mine of earth,
And will not hear it. What committed!
Impudent strumpet!
```
We are going to create a Modal with the definition of the word strumpet using `.modal-sm and and anchor tag.`