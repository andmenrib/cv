import React from "react";

import * as IconsAi from "react-icons/ai"
import * as IconsBi from "react-icons/bi"
import * as IconsBs from "react-icons/bs"
import * as IconsCg from "react-icons/cg"
import * as IconsCi from "react-icons/ci"
import * as IconsDi from "react-icons/di"
import * as IconsFa from "react-icons/fa"
import * as IconsFc from "react-icons/fc"
import * as IconsFi from "react-icons/fi"
import * as IconsFa6 from "react-icons/fa6"
import * as IconsGi from "react-icons/gi"
import * as IconsGo from "react-icons/go"
import * as IconsGr from "react-icons/gr"
import * as IconsHi from "react-icons/hi"
import * as IconsHi2 from "react-icons/hi2"
import * as IconsIm from "react-icons/im"
import * as IconsLia from "react-icons/lia"
import * as IconsIo from "react-icons/io"
import * as IconsIo5 from "react-icons/io5"
import * as IconsLu from "react-icons/lu"
import * as IconsMd from "react-icons/md"
import * as IconsPi from "react-icons/pi"
import * as IconsRi from "react-icons/ri"
import * as IconsRx from "react-icons/rx"
import * as IconsSi from "react-icons/si"
import * as IconsSl from "react-icons/sl"
import * as IconsTb from "react-icons/tb"
import * as IconsTfi from "react-icons/tfi"
import * as IconsTi from "react-icons/ti"
import * as IconsVsc from "react-icons/vsc"
import * as IconsWi from "react-icons/wi"

import { BsSlashCircleFill } from "react-icons/bs"

export default function Icon(icon, size = "auto") {
  let IconComponent;

  const ico = icon.split('/');

  if (ico[0] === "ai") IconComponent = IconsAi[ico[1]];
  if (ico[0] === "bi") IconComponent = IconsBi[ico[1]];
  if (ico[0] === "bs") IconComponent = IconsBs[ico[1]];
  if (ico[0] === "cg") IconComponent = IconsCg[ico[1]];
  if (ico[0] === "ci") IconComponent = IconsCi[ico[1]];
  if (ico[0] === "di") IconComponent = IconsDi[ico[1]];
  if (ico[0] === "md") IconComponent = IconsMd[ico[1]];
  if (ico[0] === "fa") IconComponent = IconsFa[ico[1]];
  if (ico[0] === "fc") IconComponent = IconsFc[ico[1]];
  if (ico[0] === "fi") IconComponent = IconsFi[ico[1]];
  if (ico[0] === "fa6") IconComponent = IconsFa6[ico[1]];
  if (ico[0] === "gi") IconComponent = IconsGi[ico[1]];
  if (ico[0] === "go") IconComponent = IconsGo[ico[1]];
  if (ico[0] === "gr") IconComponent = IconsGr[ico[1]];
  if (ico[0] === "hi") IconComponent = IconsHi[ico[1]];
  if (ico[0] === "hi2") IconComponent = IconsHi2[ico[1]];
  if (ico[0] === "im") IconComponent = IconsIm[ico[1]];
  if (ico[0] === "lia") IconComponent = IconsLia[ico[1]];
  if (ico[0] === "lu") IconComponent = IconsLu[ico[1]];
  if (ico[0] === "io") IconComponent = IconsIo[ico[1]];
  if (ico[0] === "io5") IconComponent = IconsIo5[ico[1]];
  if (ico[0] === "pi") IconComponent = IconsPi[ico[1]];
  if (ico[0] === "ri") IconComponent = IconsRi[ico[1]];
  if (ico[0] === "rx") IconComponent = IconsRx[ico[1]];
  if (ico[0] === "si") IconComponent = IconsSi[ico[1]];
  if (ico[0] === "sl") IconComponent = IconsSl[ico[1]];
  if (ico[0] === "tb") IconComponent = IconsTb[ico[1]];
  if (ico[0] === "tfi") IconComponent = IconsTfi[ico[1]];
  if (ico[0] === "ti") IconComponent = IconsTi[ico[1]];
  if (ico[0] === "vsc") IconComponent = IconsVsc[ico[1]];
  if (ico[0] === "wi") IconComponent = IconsWi[ico[1]];
  if (!IconComponent) {
    return <BsSlashCircleFill style={{ width: size, height: size }} />;
  }

  return <IconComponent style={{ width: size, height: size }} />;
}