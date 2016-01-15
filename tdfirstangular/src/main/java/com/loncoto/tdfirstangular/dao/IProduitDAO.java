package com.loncoto.tdfirstangular.dao;

import java.util.List;

import com.loncoto.tdfirstangular.metier.Produit;

public interface IProduitDAO {
	public List<Produit> findAll();
	public Produit findById(int id);
	public Produit save(Produit p);
	public Produit delete(int p);
}
