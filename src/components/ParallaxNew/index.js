import ParallaxHero from "../ParallaxHero";
import "./parallax.css";

import React from "react";

import sky from "./assets/images/sky.svg";
import cloud from "./assets/images/cloud.svg";
import buildings from "./assets/images/buildings.svg";
import grass from "./assets/images/grass.svg";
import bench_lamp from "./assets/images/bench_lamp.svg";
import road from "./assets/images/road_tree.svg";

export default function Parallax() {
  return (
    <div>
      <div className="parallax">
        <div className="parallax-layer parallax__layer__0">
          <img src={sky} alt="" />
        </div>
        <div className="parallax-layer parallax__layer__1">
          <img src={cloud} alt="" />
        </div>
        <div className="parallax-layer parallax__layer__2">
          <img src={buildings} alt="" />
        </div>
        <div className="parallax-layer parallax__layer__3">
          <img src={grass} alt="" />
        </div>
        <div className="parallax-layer parallax__layer__4">
          <img src={road} alt="" />
        </div>

        <div className="parallax-layer parallax__layer__5">
          <img src={bench_lamp} alt="" />
        </div>
        {/* <div className="parallax__layer parallax__layer__6">
        <img
          src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true"
          alt=""
        />
      </div> */}

        <div className="big_text">Welcome to</div>
      </div>
      <div className="parallax-cover">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolore tempora consequuntur eum? A voluptate in molestiae quo
          provident, animi fuga? Dolor minima itaque iusto illo. Laboriosam
          rerum consequatur totam pariatur porro. Id molestias est ab ad, aut
          ratione nisi, facere quidem labore perspiciatis natus dolorem nesciunt
          tenetur vero officia vel consequuntur. Tempore accusantium recusandae
          dolore ipsa et voluptates ab esse mollitia sunt consectetur quasi nisi
          atque ullam assumenda, beatae, quis fugit! Earum veritatis repudiandae
          ex consequatur odit deserunt? Recusandae optio nemo illo nam fugit
          harum eum explicabo libero doloribus quam quas quis, nesciunt tenetur,
          nobis modi tempora dolores possimus corrupti quae rem, beatae
          dignissimos ipsum suscipit. Facilis animi similique ratione minima
          corporis vel at. Nostrum molestias velit consectetur aut aliquid
          libero explicabo, incidunt nihil dolorum sit quidem impedit dolores,
          voluptatem enim optio quibusdam harum illum pariatur, rem repudiandae
          nobis quo sapiente. Consequuntur, placeat? Sapiente ducimus
          dignissimos cum nam ipsam nisi atque itaque autem illum. Nostrum, ea
          harum. Vitae architecto, placeat enim eos perspiciatis dolores
          consequuntur, consequatur, iusto vero dolor laborum quisquam mollitia!
          Delectus, assumenda illum dicta vitae dolor esse sunt nulla pariatur
          nostrum fugiat aspernatur! Quae aspernatur vero autem quasi eaque
          exercitationem minus, cupiditate delectus possimus, necessitatibus
          porro est beatae, eos recusandae neque maiores reprehenderit cumque.
          Ex fuga quisquam quaerat corrupti. Ipsam suscipit, porro minima
          distinctio quaerat sequi modi sint consectetur pariatur expedita
          soluta optio. Aut earum accusamus dolore, inventore cupiditate, amet
          commodi, accusantium facilis vel repudiandae sunt rerum libero soluta!
          Pariatur numquam fugit libero dicta quaerat dolorem repellat inventore
          voluptate voluptatem! Tenetur accusantium facilis sequi quod possimus
          tempora, perspiciatis distinctio voluptate dicta vitae saepe vel
          doloribus voluptas? Dicta voluptate molestiae tempore! Dolore
          accusantium mollitia eius. Corporis repellendus provident beatae
          laudantium dolorem dignissimos, corrupti quisquam! Eum veritatis
          blanditiis dignissimos esse. Ipsam iure deleniti omnis porro, animi
          similique tenetur. Ullam quis eveniet iusto ratione necessitatibus
          accusamus voluptates nam quod tempora ipsam, quae reprehenderit
          nesciunt voluptatum aut aliquid ipsa quisquam non impedit ut
          consequatur sit voluptatem. Reprehenderit laboriosam voluptates et est
          nisi possimus voluptate aut suscipit, cupiditate excepturi dolorum
          itaque dolore eum quae repellat omnis enim. Eos necessitatibus dolore
          quae dignissimos ducimus tempora cumque, magni voluptatum libero
          aliquid iure, quos distinctio quo quaerat quam iste consequuntur
          doloremque. Quos, molestias sint ratione eveniet ipsam perferendis
          facilis suscipit beatae libero repellat necessitatibus! Eaque vero
          quasi laboriosam voluptatibus, qui repellat distinctio odit laborum
          voluptates, aperiam deserunt cupiditate consequatur alias incidunt
          illum, repudiandae aut perspiciatis quos veritatis accusantium quis.
          Rerum suscipit saepe fugit voluptas, repellendus delectus magni
          facilis accusantium doloribus culpa, veritatis reiciendis vero non!
          Soluta nisi quis dolorem doloremque totam ipsam nesciunt quibusdam,
          itaque harum, dignissimos illo doloribus. Eveniet eligendi, ut, aut
          facilis eius aperiam mollitia voluptatum reprehenderit illo
          perferendis itaque accusamus, explicabo quasi recusandae in ex minus
          libero autem maiores quisquam porro id ducimus harum! Nostrum
          reiciendis commodi sit voluptas, non tempore deleniti dignissimos
          vitae odio nulla provident eaque debitis. Ex enim obcaecati nemo
          laudantium dolorum unde sequi consequatur natus numquam atque
          consequuntur nihil odit, distinctio eaque ducimus accusantium incidunt
          mollitia ut, tenetur expedita facere fuga aliquam dolores. Vero
          eligendi quam accusamus nesciunt repellat sed possimus, quaerat qui
          rem. Doloremque, amet corrupti officiis culpa quo error eius id
          dolorem officia enim quam architecto. Nobis ut eaque dignissimos, quo
          reprehenderit soluta laborum fuga quisquam excepturi nam, velit odio
          placeat possimus iste accusantium modi aspernatur!
        </p>
        {/* <div className="part_2"><ParallaxHero/></div> */}
      </div>
    </div>
  );
}
