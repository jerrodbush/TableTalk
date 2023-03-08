class MessagingController < ApplicationController

    def send_message 
        account_sid = "AC62628129e81097591ef55c507d0185a7"
        auth_token = "180b6f4ee088ac1c73a7c641833dd878"
        client = Twilio::REST::Client.new(account_sid, auth_token)

        message = client.messages.create(
            to: "+14042743802",
            from: "+12182978244",
            body: "You've booked a reservation on TableTalk!"
        )
        #   render plain: message.status
        render plain: message
    end

end
