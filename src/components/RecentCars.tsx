import Card from "./Cards/Card";


export default function RecentCars(){
    return(
        <div className="px-20 mb-[6.25rem]">
            <h2 className="text-3xl font-bold my-5">Most recent cars for sale in Cameroon</h2>

            <div className="flex items-center justify-between flex-wrap gap-y-[3.125rem]">
                <Card img="https://content-images.carmax.com/qeontfmijmzv/25NcA62ks4WtOMUJlvsW9x/77ace1ff19f51d1968a363b1515c4af6/acura.jpg"/> 
                <Card img="https://pictures.dealer.com/a/acuraofthornhill/0082/06771c6d46558c7ce46218eb3af69670x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520"/>
                <Card img="https://pictures.dealer.com/c/ccipeelchryslerjeepdodge/1203/224da34703c030fac0c3f5d55af8e553x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520"/>
                <Card img="https://listings-prod.tcimg.net/listings/5095/62/05/19UUB2F42KA010562/VIOIUQIZFOPKYBUBTRQ6MEKPUE-cr-540.jpg"/>

                <Card img="https://pictures.dealer.com/c/ccipeelchryslerjeepdodge/1385/7ee70e0f72ea767751f6e54afad0a272x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520"/>
                <Card img="https://pictures.dealer.com/j/jenkinshindaofleesburg/0852/88db4db23b8ffd942e1e629a59d1e84ax.jpg?impolicy=downsize_bkpt&imdensity=1&w=520"/>
                <Card img="https://pictures.dealer.com/c/claytonvolvovcna/0737/a3559704e951aa905dc02f4c67825b5bx.jpg?impolicy=resize&w=640"/>
                <Card img="https://pictures.dealer.com/h/hondaofillinoisspringfield/1880/b3ac42da8caf94c9f0fab95953da22c9x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520"/>
                
            </div>
        </div>
    )
}