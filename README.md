# monitr
Expanding the universe


### Get ready for development (on linux):
#### 1)

<p>Install linux Mint
<br>If you are using virtual box: Remember to set up bidirectional clipboard (and drag-and-drop)</p>

1.1)
<p>
If you are setting up linux mint:<br>
 - press windows key<br>
 - type "keyboard"<br>
 - press "keyboard", "layout"<br>
 - press "plus sign", find your keyboard<br>
 - move the new keyboardlayout to the top (press keyboard, press up-arrow)<br>
 </p>
 
#### 2)
<p>
type the following in "terminal" (tip: press windows key and search):
</p>

<p>
required (for developing): sudo apt-get -y install ruby git rails zsh xclip
 </p>

<p>
optional (but used on actual server): sudo apt-get -y install nginx unicorn
 </p>

#### 3) Moving around (tips)

<p>
Tips: cd foldername/subfolder <-- takes you to subfolder<br>
cd .. <-- takes you back to previous folder (foldername)<br>
ls <-- lists files and folders <br>
rm <-- deletes files<br>
rm -r <-- deletes recursively => use if folder
 </p>

<p>
ctrl+shift+c <-- copy
 </p>


#### 4) Setting up git

<p>
Generate ssh key:
ssh-keygen -t rsa -b 4096 -C "email@address.something"
 </p>

<p>
4.1) Go to folder where it is saved (it is written in the terminal after execution):
 </p>
Could be something like "/home/mint/.ssh/"
#### 4.2) Check if ssh agent is running:
eval "$(ssh-agent -s)"

<p>
Should return something like: "Agent pid 59566"
 </p>

#### 4.3) Just do this:
<p>
ssh-add ~/.ssh/id_rsa
 </p>

#### 5) Do this:
<p>
xclip -sel c  ~/.ssh/id_rsa.pub
 </p>
<p>
-- Copies the contents of the id_rsa.pub file to your clipboard
 </p>

<p>
Now you can paste it in your browser (as described under)
 </p>

#### 6)
<p>
Do points 2 to 8: https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/
 </p>
#### 7) (For Windows, fixes errors)
Windows functions a little differently to UNIX-based systems.
Two gems specifically for windows installed. 
Please use the windows branch when using windows, just in case something breaks.

If you get errors, try the following:
1. Run the following commands ( opens irb console ):
> irb
Then write the following in the console:
> File.expand_path("./")
> exit ( or ctrl+c ) 

2. Possible solution 2:
> ruby -e "puts RUBY_PLATFORM"
3. Possible solution 3:
> mv sites tmpsites
> mv tmpsites sites
(Take a look at the error message. This applies if the error is of the format /Users/XXXX/Sites/xxxx. Rails on windows is not fond of capital letters... and OSX is fond of repacitalizing. :/)
