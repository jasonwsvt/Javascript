var global = this

//Copied from https://stackoverflow.com/questions/38400594/javascript-deep-comparison
//deepEqual checks whether two given objects are the same
function deepEqual(a,b)
{
  if( (typeof a == 'object' && a != null) &&
      (typeof b == 'object' && b != null) )
  {
     var count = [0,0];
     for( var key in a) count[0]++;
     for( var key in b) count[1]++;
     if( count[0]-count[1] != 0) {return false;}
     for( var key in a)
     {
       if(!(key in b) || !deepEqual(a[key],b[key])) {return false;}
     }
     for( var key in b)
     {
       if(!(key in a) || !deepEqual(b[key],a[key])) {return false;}
     }
     return true;
  }
  else
  {
     return a === b;
  }
}

//Function receives an ID and a string as parameters and adds the code before the end of the element with the given id
function append(id, code) {
	document.getElementById(id).insertAdjacentHTML('beforeend', code)
}

//Goes through all keys in global and local and separates them by whether or not they're the same or different in some way.
function scope() {
	var local = this

	//create a unique list of all the keys in global and local, and go through it one at a time
	new Set([...Object.keys(global), ...Object.keys(local)]).forEach(key => {
		//Assign to a variable a table row including the key, and the value in the global and local arrays
		var code = `<tr><td>${key}:</td><td>${global[key]}</td><td>${local[key]}</td></tr>`

		//If the key doesn't exist in the local this
		if (!Object.keys(local).includes(key)) {
			console.log(key, "exists globally but not locally")

			//Append to the list of exclusively global keys
			append("globalOnly-table", code)
		}

		//If the key doesn't exist in the global this
		else if (!Object.keys(global).includes(key)) {
			console.log(key, "exists locally but not globally")

			//Append to the list of exclusively localal keys
			append("localOnly-table", code)
		}

		//If the key exists in both the local and global umm...  these?  Thises?
		else {
			//d will be assigned the result of the deepEqual call
			var d;

			//Try deepEqual with the local and global values of the key.  If it finishes successfully (returns true or false), use it.  Otherwise, set d to null.
			try {
				//deepEqual returns true if two objects are the same, and false if not.
				d = deepEqual(local[key], global[key])
			} catch {
				//If it fails, seems to me from looking at the output like they're the same, but I'm not going to take the time to troubleshoot someone elses' advanced code right now.
				console.log(`Error running deepEqual with ${key}:\n${local[key]}\n${global[key]}`)
				d = null
			}

			if (d === true) {
				console.log(key, "exists locally and globally and are the same")

				//Append to the list of same key values
				append("bothSame-table", code)
			}
			else if (d === false) {
				console.log(key, "exists locally and globally and are different")

				//Append code to the list of different key values
				append("bothDifferent-table", code)
			}
			else {
				console.log(key, "exists locally and globally and it's difficult to tell whether they're the same or different")
				
				//Append code to the list of unknown key values
				append("bothUnknown-table", code)
			}
		}
	})
}

//Add a subjective message at the top of the page regarding the time.
document.getElementsByTagName('h1')[0].insertAdjacentHTML('beforeend', `<br>The hour is ${new Date().getHours() > 22 ? "late" : "early"}`)

//Call the scope function
scope()