#!/bin/bash
# since 2011/07/12
# more http://sekysu.blogspot.com
 
function _execute()
{
    NR=$1
    dd if=/dev/zero of=file.7z.002 bs="${NR}" count=1
    7z t file.7z.001
}
 
PASSO=0
FIM=1073741824
 
TITLE='Nome do script'
MSG='Por favor, aguarde o fim do processamento ou tecle Crtl + C para abortar.'
 
while [ $PASSO != $FIM  ]
do
   let PASSO=PASSO+1
        _execute $PASSO &&
   echo $(( ( $PASSO * 100 ) / $FIM )) ||
        exit 2
 
done | dialog --title "$TITLE" --guage "$MSG" 10 80
