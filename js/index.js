<script>
  new CozeWebSDK.WebChatClient({
    config: {
      bot_id: '7614173555504709668',
    },
    componentProps: {
      title: 'Coze',
    },
    auth: {
      type: 'token',
      token: 'pat_********',
      onRefreshToken: function () {
        return 'pat_********'
      }
    }
  });
</script>
