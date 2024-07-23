package br.ufg.artattack.dto;

import br.ufg.artattack.modelo.Integrante;
import br.ufg.artattack.modelo.Sala;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SalaAbertaWrapper {
    public Sala salaNova;
    public Integrante integranteRequerinte;
    public boolean isIntegranteNovo;
}