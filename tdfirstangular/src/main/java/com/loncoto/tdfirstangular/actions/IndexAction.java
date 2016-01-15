package com.loncoto.tdfirstangular.actions;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.loncoto.tdfirstangular.dao.IProduitDAO;
import com.loncoto.tdfirstangular.metier.Produit;
import com.opensymphony.xwork2.ActionSupport;

public class IndexAction extends ActionSupport {
	
	private int produitID;
	private String produitNom;
	private double produitPrix;
	private String produitCategorie;
	private int produitStock;
	
	
	public int getProduitID() {return produitID;}
	public void setProduitID(int produitID) {this.produitID = produitID;}
	
	public String getProduitNom() {return produitNom;}
	public void setProduitNom(String produitNom) {this.produitNom = produitNom;}
	
	public double getProduitPrix() {return produitPrix;}
	public void setProduitPrix(double produitPrix) {this.produitPrix = produitPrix;}
	
	public String getProduitCategorie() {return produitCategorie;}
	public void setProduitCategorie(String produitCategorie) {this.produitCategorie = produitCategorie;}
	
	public int getProduitStock() {return produitStock;}
	public void setProduitStock(int produitStock) {this.produitStock = produitStock;}

	private IProduitDAO produitDAO;	
	public IProduitDAO getProduitDAO() {return produitDAO;}
	public void setProduitDAO(IProduitDAO produitDAO) {this.produitDAO = produitDAO;}

	private static Logger log = LogManager.getLogger(IndexAction.class);
	
	private static final long serialVersionUID = 1L;
	
	private Produit produit;
	public Produit getProduit() {return produit;}
	
	private List<Produit> produits;
	public List<Produit> getProduits() {return produits;}
	public void setProduits(List<Produit> produits) {this.produits = produits;}

	public String index() {
		log.info("appel de l'index");
		produits = getProduitDAO().findAll();
		return SUCCESS;
	}
	
	public String save(){
		Produit p = new Produit(getProduitID(), getProduitNom(), getProduitPrix(), getProduitCategorie(), getProduitStock());
		this.produit = getProduitDAO().save(p);
		return SUCCESS;
	}
	
	public String delete(int p){
		this.produit = getProduitDAO().delete(p);
		return SUCCESS;
	}

}
