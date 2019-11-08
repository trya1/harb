let playerX = 0;
let playerO = 1;
		

function winCheckX()
{
	if (document.getElementById("x1").style.zIndex =="2")
	{
		if(document.getElementById("x2").style.zIndex =="2")
		{
			if(document.getElementById("x3").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else if(document.getElementById("x5").style.zIndex =="2")
		{
			if(document.getElementById("x9").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else if(document.getElementById("x4").style.zIndex =="2")
		{
			if(document.getElementById("x7").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}

	}

	else if (document.getElementById("x2").style.zIndex =="2")
	{
		if(document.getElementById("x5").style.zIndex =="2")
		{
			if(document.getElementById("x8").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}
	}


	else if (document.getElementById("x3").style.zIndex =="2")
	{
		if(document.getElementById("x6").style.zIndex =="2")
		{
			if(document.getElementById("x9").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else if(document.getElementById("x5").style.zIndex =="2")
		{
			if(document.getElementById("x7").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}

	}
	
	else if (document.getElementById("x4").style.zIndex =="2")
	{
		if(document.getElementById("x5").style.zIndex =="2")
		{
			if(document.getElementById("x6").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}
	}

	else if (document.getElementById("x7").style.zIndex =="2")
	{
		if(document.getElementById("x8").style.zIndex =="2")
		{
			if(document.getElementById("x9").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}
	}
	else
	{
	return false;
	}

		
}


function winCheckO()
{
	if (document.getElementById("o1").style.zIndex =="2")
	{
		if(document.getElementById("o2").style.zIndex =="2")
		{
			if(document.getElementById("o3").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else if(document.getElementById("o5").style.zIndex =="2")
		{
			if(document.getElementById("o9").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else if(document.getElementById("o4").style.zIndex =="2")
		{
			if(document.getElementById("o7").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}

	}

	else if (document.getElementById("o2").style.zIndex =="2")
	{
		if(document.getElementById("o5").style.zIndex =="2")
		{
			if(document.getElementById("o8").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}
	}


	else if (document.getElementById("o3").style.zIndex =="2")
	{
		if(document.getElementById("o6").style.zIndex =="2")
		{
			if(document.getElementById("o9").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else if(document.getElementById("o5").style.zIndex =="2")
		{
			if(document.getElementById("o7").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}

	}
	
	else if (document.getElementById("o4").style.zIndex =="2")
	{
		if(document.getElementById("o5").style.zIndex =="2")
		{
			if(document.getElementById("o6").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}
	}

	else if (document.getElementById("o7").style.zIndex =="2")
	{
		if(document.getElementById("o8").style.zIndex =="2")
		{
			if(document.getElementById("o9").style.zIndex =="2")
				{
				return true;	
				}
			else
				{
				return false;	
				}
		}
		else
			{
			return false;
			}
	}
	else
	{
	return false;
	}

		
}

function counter()
{
let playsX = 0;
	for(let i = 1; i < 10; i++)
	{
		if(document.getElementById("x" + i).style.zIndex =="2")
		{
		playsX++;
		}
	}
return playsX;
}


for(let i = 1; i < 10; i++)
{
	
	document.getElementById("square" + i).addEventListener("click", () => {
	if (playerX < playerO)
	{
		
		document.getElementById("x" + i).style.zIndex ="2";
		document.getElementById("p2").style.fontSize ="200%";
		document.getElementById("p1").style.fontSize ="0%";	
		playerX++;
		if(winCheckX() == true)
		{
		setTimeout(function(){alert("Player 1 wins!"); }, 150);
		}
		else if(winCheckO() == false && winCheckX() == false)
		{
			if(counter() == 5)
			{
			setTimeout(function(){alert("It's a tie!"); }, 150);
			}
			
		}	
		
	} 
	else
	{
		
		document.getElementById("o" + i).style.zIndex ="2";
		document.getElementById("p1").style.fontSize ="200%";
		document.getElementById("p2").style.fontSize ="0%";		
		playerO++;
		if(winCheckO() == true)
		{
		setTimeout(function(){alert("Player 2 wins!"); }, 150);
		}

		
	}
	});
								
}
			
		

			







