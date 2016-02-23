# monitr
Expanding the universe


### Get ready for development (on linux):
1)

<p>Install linux Mint
If you are using virtual box: Remember to set up bidirectional clipboard (and drag-and-drop)</p>

1.1)
<p>
If you are setting up linux mint:
 - press windows key
 - type "keyboard"
 - press "keyboard", "layout"
 - press "plus sign", find your keyboard
 - move the new keyboardlayout to the top (press keyboard, press up-arrow)
 </p>
 
2)
<p>
type the following in "terminal" (tip: press windows key and search):
</p>

<p>
required (for developing):
sudo apt-get -y install ruby git rails zsh xclip
 </p>

<p>
optional (but used on actual server):
sudo apt-get -y install nginx unicorn
 </p>

3) Moving around (tips)

<p>
Tips: cd foldername/subfolder <-- takes you to subfolder
cd .. <-- takes you back to previous folder (foldername)
ls <-- lists files and folders 
rm <-- deletes files
rm -r <-- deletes recursively => use if folder
 </p>

<p>
ctrl+shift+c <-- copy
 </p>


<p>
4) Setting up git
 </p>

<p>
Generate ssh key:
ssh-keygen -t rsa -b 4096 -C "email@address.something"
 </p>

<p>
4.1) Go to folder where it is saved (it is written in the terminal after execution):
 </p>
Could be something like "/home/mint/.ssh/"
4.2) Check if ssh agent is running:
eval "$(ssh-agent -s)"

<p>
Should return something like: "Agent pid 59566"
 </p>

4.3) Just do this:
<p>
ssh-add ~/.ssh/id_rsa
 </p>

5) Do this:
<p>
xclip -sel c  ~/.ssh/id_rsa.pub
 </p>
<p>
-- Copies the contents of the id_rsa.pub file to your clipboard
 </p>

<p>
Now you can paste it in your browser (as described under)
 </p>

6)
<p>
Do points 2 to 8: https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/
 </p>
