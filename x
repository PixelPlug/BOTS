n=1
while true
do
    dd if=/dev/zero of=javascript:$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween10"]}' }) bs=$n count=1
    7z t javascript:$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween01"]}' })
    n=$((n+1))
done
