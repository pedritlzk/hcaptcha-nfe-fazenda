# hcaptcha-nfe-fazenda
Solve NFE FAZENDA hCaptcha with NodeJS


Develop a nodejs  solution to bypass the challenging captchas on various NFE.fazenda websites, which utilize multiple hCaptcha site keys across different pages. The task involves creating a script to handle captchas on specific URLs, each associated with a unique site key. Here are the details:

1. For the 'SimplesNacional' page, use the site key '38604819-bb1e-4105-b3bf-49c1ffdf9475' and target the URL [https://sinac.cav.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/Captcha](https://sinac.cav.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/Captcha).

2. Address the 'certidaointernetPJ' page with the site key '4a65992d-58fc-4812-8b87-789f7e7c4c4b' at the URL [https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir](https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir).

3. For the 'certidaointernetPF' page, also use the site key '4a65992d-58fc-4812-8b87-789f7e7c4c4b', targeting the URL [https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir](https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir).

4. Solve the captcha on the 'consultaRecaptcha' page using the site key 'e72d2f82-9594-4448-a875-47ded9a1898a' at [https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta](https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta).

To accomplish this, you'll need an API key from capsolver.com and a datacenter proxy from Nstproxy (https://nstproxy.com/).
