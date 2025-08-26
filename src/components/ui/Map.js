import Card from "@/components/ui/Card"

export default function Map(){


    return(
<Card flexSize={`flex-2`} CustomP={`p-0`}>
         <iframe
            className="flex-2 w-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108851.90013468266!2d74.37230191393876!3d31.5070756431688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1755848694728!5m2!1sen!2s"
            width="600"
            height="660"
            style={{border:"0"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
</Card>
    )
}