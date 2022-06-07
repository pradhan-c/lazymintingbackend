# INTRODUCTION
NFT’s is pretty common term in the blockchain space right now ,in fact Opensea a NFT 
website is the most visited blockchain app in the world right now .NFT stands for Non 
fungible token ,Non fungible means that it is unique and cant be replaced with something 
else . For example bitcoin is fungible, if you trade one for another you will have the same 
thing . NFT’s can be anything digital like music , pictures , gif, video etc . NFT’s provide 
financial support to artists all over the world. However there are major issues in the NFT 
space like high gas costs for minting NFT’s resulting in market entry barriers , this is why a 
feature called lazy minting was introduced as a solution for the high gas cost. 

## LAZY MINTING
Lazy minting basically means that an artist can mint their NFT with Zero gas fees .For 
normal minting artist has to pay a lot of gas fees to create the NFT but in lazy minting 
they don’t have to pay any gas fees . In Lazy minting the NFT is available “off-chain” , or 
outside the blockchain and is minted only when the NFT is sold . This means that the 
artist doesn’t need to pay any fees for the minting process . Here the buyer of the nft pays 
for the purchase and minting nft ,so the artist doesn’t have to pay anything.

## BACKEND
The backend part of Lazy minting uses node js for server side and mongo DB for storing the data.
The database stores the metadata and signed vouchers .The signed vouchers  which needs to be 
verified in the blockchain is stored here.


