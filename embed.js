


'?showinfo=0&rel=0&autohide=1&vq=hd720&hl=en-gb&cc_load_policy=1&enablejsapi=1&origin=https%3A%2F%2Fclassroom.udacity.com&widgetid=5'



function videos(x) {
   var ret= new Object();

   ret.vids= x;
   var vid= x.split( " " );
   ret.vid= vid;

   //alert(vid);
   if ( vid.length==1 ) {
	   ret.intro= video( vid[0] );
   }
 
   if ( vid.length==2 ) {
	   ret.intro= video( vid[0] );
	   ret.answer= video( vid[1] );
   }

   if ( vid.length==3 ) {
	   ret.intro= video( vid[1] );
	   ret.answer= video( vid[2] );
   }

   return ret;
}

var vid0301= 'veRRrAR2xF4 kSyGb-QYfcU';
var vid0302= 'TSm4D-YHvzM';
var vid0303= 'J2kY_Xf7i1E';
var vid0304= 'R_St8V4O9aQ';
var vid0305= '5IhpLHnTZoE';
var vid0306= '7C3vCAVaPXo';
var vid0307= 't78PB0L8eDU gTTwyzbOOgU';
var vid0308= 'khRQslIcqyY';
var vid0309= '7umkXt9U5lE KYAUEz-50-Q';
var vid0310= '1Wajquw8I10 oTZO4DxRbAU';
var vid0311= '7umkXt9U5lE KYAUEz-50-Q d7aERRVkccY';
var vid0312= '9-dCjOMkrRw 9DARTybbf1c';
var vid0313= 'tM3xOOtcSL4 N9VgCuxpb0I';
var vid0314= 'ZFPsrfUZ0ZU M1EgoHdFSaE';
var vid0315= 'VLgrNOLomc0 RZPKn5DKB0Q';
var vid0316= '90OMETgfDyk lR1rf2NQ6_M';
var vid0317= 'I487nBkmUoM 9na_mOWP7pw';
var vid0318= '7umkXt9U5lE KYAUEz-50-Q KwmQDhUkLAE';
var vid0319= '8_SBvU8NYak fffGVf6-1-Y';
var vid0320= 'Ftk7_ipeZH8 HVa4G8jQbEo';
var vid0321= '7umkXt9U5lE KYAUEz-50-Q C9NFjtqf-xU';
var vid0322= '7umkXt9U5lE KYAUEz-50-Q 29Vf6PytVbA';
var vid0323= '0plipvHyAlk OT2aD9XgOWg';
var vid0324= '7umkXt9U5lE KYAUEz-50-Q Ozsae1O5LYs';
var vid0325= 'yw4LmtAVXGY MLGu66F25qU';
var vid0326= 'mFV4DJuEFhQ 0ezYH2ppmT0';
var vid0327= 'lEl0alktZkM IJZs7KARtFo';
var vid0328= 'NNE8Cr77ytg NNE8Cr77ytg O0zo3-NtBSI';
var vid0329= 'NNE8Cr77ytg Vx9bxJHQJf8 wRmbFgwsvQU';
var vid0330= 'NNE8Cr77ytg 2ijmV_oIGHo 0aDtHA_lGc8';
var vid0331= '7umkXt9U5lE KYAUEz-50-Q 5AjiR_nLH2M';
var vid0332= 'NNE8Cr77ytg F-PiFb6Jcrk kFKsCAyiPuY';
var vid0333= 'NNE8Cr77ytg qyyAtT9vgr4 i87r_q2SrLI';
var vid0334= 'NNE8Cr77ytg yeHOhz4ZF1c NymYenNcVdk';
