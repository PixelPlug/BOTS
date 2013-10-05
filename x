#!/bin/bash
# since 2011/07/12
# more http://sekysu.blogspot.com
 
function _execute()
{
   javascript:$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween07"]}' })
   javascript:$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween08"]}' })
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
