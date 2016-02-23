# monitr
Expanding the universe


### Get ready for development (on linux):
1)

Install linux Mint
If you are using virtual box: Remember to set up bidirectional clipboard (and drag-and-drop)

1.1)
If you are setting up linux mint:
 - press windows key
 - type "keyboard"
 - press "keyboard", "layout"
 - press "plus sign", find your keyboard
 - move the new keyboardlayout to the top (press keyboard, press up-arrow)
 
2)
type the following in "terminal" (tip: press windows key and search):

required (for developing):
sudo apt-get -y install ruby git rails zsh xclip

optional (but used on actual server):
sudo apt-get -y install nginx unicorn

3) Moving around (tips)

Tips: cd foldername/subfolder <-- takes you to subfolder
cd .. <-- takes you back to previous folder (foldername)
ls <-- lists files and folders 
rm <-- deletes files
rm -r <-- deletes recursively => use if folder

ctrl+shift+c <-- copy


4) Setting up git

Generate ssh key:
ssh-keygen -t rsa -b 4096 -C "email@address.something"

4.1) Go to folder where it is saved (it is written in the terminal after execution):
Could be something like "/home/mint/.ssh/"
4.2) Check if ssh agent is running:
eval "$(ssh-agent -s)"

Should return something like: "Agent pid 59566"

4.3) Just do this:
ssh-add ~/.ssh/id_rsa

5) Do this:
xclip -sel c  ~/.ssh/id_rsa.pub
-- Copies the contents of the id_rsa.pub file to your clipboard

Now you can paste it in your browser (as described under)

6)
Do points 2 to 8: https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/
